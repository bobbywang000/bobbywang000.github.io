#!/bin/bash

# Run after bootstrap_base_mac.sh

set -euxo pipefail

# Work only casks
brew install --cask \
    aws-vpn-client \
    pgadmin4 \
    pop \

pip install python-gitlab

curl -sL http://bobbywang000.github.io/kamino.py | python3 -
