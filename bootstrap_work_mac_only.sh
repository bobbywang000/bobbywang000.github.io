#!/bin/bash

# Run after bootstrap_base_mac.sh

set -euxo pipefail

# Work only casks
brew install --cask \
    1password \
    aws-vpn-client \
    pgadmin4 \
    pop \
    slack
