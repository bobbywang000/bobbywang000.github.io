#!/bin/bash

# Run after bootstrap_base_mac.sh

set -euxo pipefail

# Personal only casks
brew install --cask \
    ableton-live-suite \
    audacity \
    dbeaver-community \
    handbrake \
    mixed-in-key \
    obs \
    rekordbox

# Personal only CLIs
brew install \
    yt-dlp
