import { scrapeStaticPagePuppeteerDemo } from "./scrapeStaticPagePuppeteerDemo"
import { scrapeStaticPageNightmareDemo } from "./scrapeStaticPageNightmareDemo"
import { scrapeDynamicPageNightmareDemo }  from "./scrapeDynamicPageNightmareDemo"

(async () => {
  try {
    await scrapeStaticPagePuppeteerDemo();
    scrapeStaticPageNightmareDemo();
    scrapeDynamicPageNightmareDemo();
  } catch (e) {
    console.log(`Error: ${e}`);
  }
})();
