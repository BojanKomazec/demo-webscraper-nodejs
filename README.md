# webscraper-nodejs

An app which demonstrates webpage scraping with Node.js.

# Dependencies

Puppeteer is a Node API for headless Chrome.

# Running the app

## Running the app on the local Node.JS installation 

To run the app execute:
```
npm install && npm start
```
## Running the app in Docker container

```
$ docker build -t bkomazec/demo-webscraper .
$ docker run --user=node --cap-add=SYS_ADMIN --rm -it --name running-demo-webscraper bkomazec/demo-webscraper
```
