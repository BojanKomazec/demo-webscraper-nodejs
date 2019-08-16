const Nightmare = require('nightmare')
const cheerio = require('cheerio');
const nightmare = Nightmare({ show: true });
const url = 'https://www.flipkart.com/';

export function scrapeDynamicPageNightmareDemo() {
    nightmare
        .goto(url)
        .wait('body')
        .click('button._2AkmmA._29YdH8')
        .type('input.LM6RPg', 'nodejs books')
        .click('button.vh79eN')
        .wait('div.bhgxx2')
        .evaluate(() => {
            if (document) {
                const body = document.querySelector('body');
                if (body) {
                    return body.innerHTML;
                }
            }
        })
        .end()
        .then((response: any) => {
            console.log(getData(response));
        }).catch((err: any) => {
            console.log(err);
        });

        let getData = (html: any) => {
            let data: any[] = [];
            const $ = cheerio.load(html);
            $('div._1HmYoV._35HD7C:nth-child(2) div.bhgxx2.col-12-12').each((row: any, raw_element: any) => {
                $(raw_element).find('div div div').each((i: any, elem: any) => {
                    let title = $(elem).find('div div a:nth-child(2)').text();
                    let link = $(elem).find('div div a:nth-child(2)').attr('href');
                    if (title) {
                        data.push({
                            title : title,
                            link : link
                        });
                    }
                });
            });
        return data;
    }
}
