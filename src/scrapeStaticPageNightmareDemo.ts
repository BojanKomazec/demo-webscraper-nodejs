const Nightmare = require('nightmare')
const cheerio = require('cheerio');

const nightmare = Nightmare({ show: true })
const url = 'https://news.ycombinator.com';

export function scrapeStaticPageNightmareDemo() {
    nightmare
        .goto(url)
        .wait('body')
        .evaluate(() => {
            if (document) {
                const body = document.querySelector('body');
                if (body) {
                    return body.innerHTML
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
        $('table.itemlist tr td:nth-child(3)').each((i: any, elem: any) => {
            data.push({
                title : $(elem).text(),
                link : $(elem).find('a.storylink').attr('href')
            });
        });
        return data;
    }
}
