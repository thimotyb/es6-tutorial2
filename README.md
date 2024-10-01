## ES6 Tutorial

Start the tutorial [here](http://ccoenraets.github.io/es6-tutorial).

## Install node with nvm
sudo apt update
# sudo apt remove nodejs

# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# download and install Node.js
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.12.2`

# verifies the right NPM version is in the environment
npm -v # should print `10.5.0`

# If dpckg locked in Ubuntu
# lsof /var/lib/dpkg/lock
# ps fax | grep PID
# sudo kill -9 PID

## Run and compile
npm run babel
npm run webpack
npm start
