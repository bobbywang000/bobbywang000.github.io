#!/bin/bash

set -euxo pipefail

# Install brew + cask + mas (mac apple store) for installing other packages
# Note that instaling brew will also install git and a few other xcode tools,
# so we don't need to install those separately later on
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Need a break after here to add the right path to the .zshrc file

brew install \
    cask \
    mas

# Personal + Work casks
brew install --cask \
    docker \
    dropbox \
    google-chrome \  # Chrome sometimes is already installed so this installation fails
    iterm2 \
    lastpass \
    postman \
    spectacle \
    spotify \
    sublime-text \
    visual-studio-code \
    vlc

# Personal + Work CLIs
brew install \
    ffmpeg \
    git-lfs \
    hq \
    jq \
    nginx \
    pyenv \
    yq

# personal + work other packages

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
mas install 946798523  # Sleep control center

# AWS CLI
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
