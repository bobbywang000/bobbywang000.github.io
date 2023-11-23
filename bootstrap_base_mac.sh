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

# oh-my-zsh and other zsh setup
# See https://medium.com/swlh/power-up-your-terminal-using-oh-my-zsh-iterm2-c5a03f73a9fb
curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh
# Powerline fonts, necessary for a couple glyphs that omz uses
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts

# From https://ivanaugustobd.medium.com/your-terminal-can-be-much-much-more-productive-5256424658e8
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
