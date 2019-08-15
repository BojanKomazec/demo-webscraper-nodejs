const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.reddit.com';


(async () => {
  try {
    // Running Chrome without a sandbox is strongly discouraged. --no-sandbox is used here as a temp fix for:
    // Error: Error: Failed to launch chrome!
    // [0815/151716.138247:ERROR:zygote_host_impl_linux.cc(89)] Running as root without --no-sandbox is not supported.
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    $('h3', html).each(function (i: number, el: CheerioElement){
      console.log($(el).text());
    });
    await browser.close();
  } catch (e) {
    console.log(`Error: ${e}`);
  }
})();
