FROM node:10.16
WORKDIR /usr/src/webscraper
COPY package*.json ./
RUN npm install
COPY . .

# apt-cache search libatk-bridge is inserted in order to print out the verison available (e.g. libatk-bridge2.0-0);
# that version shall be listed in apt install command
RUN apt-get update && \
apt-cache search libatk-bridge && \
apt install -y libx11-xcb1 libxtst6 libnss3 libxss1 libasound2 libatk-bridge2.0-0 libgtk-3-0

CMD [ "npm", "start" ]
