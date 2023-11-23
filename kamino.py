import argparse
import gitlab
import os
import subprocess

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--repos-home",
        default=f"{os.getenv('HOME')}/repos",
        help="Which directory the repos will be cloned into",
    )
    parser.add_argument(
        "--gitlab-group",
        default="enable-medicine/eng",
    )
    parser.add_argument(
        "--shallow",
        action="store_true",
    )

    return parser.parse_args()

def group_matches(group_url, group_slugs, recursive=True):
    if recursive:
        return any([slug in group_url for slug in group_slugs])
    else:
        return any([group_url.endswith(slug) for slug in group_slugs])


def main(args):
    gitlab_pat = os.getenv("GITLAB_PAT")
    if not gitlab_pat:
        raise Exception("Please set GITLAB_PAT environment variable")
    gl = gitlab.Gitlab(private_token=gitlab_pat)

    groups = [
        g
        for g in gl.groups.list(get_all=True)
        if args.gitlab_group in g.web_url
    ]

    projects = []
    for group in groups:
        print(f"Fetching projects for group {group.name}")
        curr_projects = group.projects.list(get_all=True)
        projects.extend(curr_projects)
    
    os.makedirs(args.repos_home, exist_ok=True)
    for project in projects:
        git_url = project.ssh_url_to_repo
        print(git_url)

        if args.shallow:
            command = ["git", "clone", "--depth", "1", git_url]
        else:
            command = ["git", "clone", git_url]

        subprocess.run(command, cwd=args.repos_home, check=True)

if __name__ == "__main__":
    args = parse_args()
    res = main(args)
