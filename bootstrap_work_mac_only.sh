#!/bin/bash

# Run after bootstrap_base_mac.sh

set -euxo pipefail

# Work only casks
brew install --cask \
    aws-vpn-client \
    pgadmin4 \
    pop \

brew install \
    redis

pip3 install \ 
    python-gitlab \
    pipenv==2022.8.5

# Clone all the eng repos
curl -sL https://bobbywang000.github.io/kamino.py | python3 -

# Necessary for portal dev
arch -arm64 brew install llvm@11
brew install postgresql@14
