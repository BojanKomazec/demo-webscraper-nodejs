FROM node:10.16

RUN apt-get update && \
# apt-cache search libatk-bridge is inserted in order to print out the verison available (e.g. libatk-bridge2.0-0);
# that version shall be listed in apt install command
apt-cache search libatk-bridge && \
# puppeteer dependencies
# full list: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix
apt install -y libx11-xcb1 libxtst6 libnss3 libxss1 libasound2 libatk-bridge2.0-0 libgtk-3-0 && \
# test whether user_namespaces are enabled
sysctl kernel.unprivileged_userns_clone

# setting the flag if default value is 0
# sysctl -w kernel.unprivileged_userns_clone=1
# fails with error:
# setting key "kernel.unprivileged_userns_clone": Read-only file system
# echo 'kernel.unprivileged_userns_clone=1' > /etc/sysctl.d/userns.conf

USER node
RUN mkdir -p /home/node/webscraper
WORKDIR /home/node/webscraper
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .

# Use this to debug issues with access rights
# CMD [ "ls", "-la", "/home/node/webscraper" ]

CMD [ "npm", "start" ]
