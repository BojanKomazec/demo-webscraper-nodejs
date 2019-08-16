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
# References

Code has been inpired by following sources:

[How to Perform Web-Scraping using Node.js](https://blog.bitsrc.io/https-blog-bitsrc-io-how-to-perform-web-scraping-using-node-js-5a96203cb7cb)

[How to Perform Web-Scraping using Node.js- Part 2](https://blog.bitsrc.io/how-to-perform-web-scraping-using-node-js-part-2-7a365aeedb43)
