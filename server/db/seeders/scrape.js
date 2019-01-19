const puppeteer = require('puppeteer');
const testing = require('./tinySeed1')

const test = 'https://www.facebook.com/feminaprovita/posts/10100282256094770';
const today = 'https://www.facebook.com/feminaprovita/posts/10100286514401090';

let scrape = async (url) => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto(url);

      const result = await page.evaluate(() => {
        // let date = document.querySelector('.timestampContent').innerText;
        let post = document.querySelector('._5pbx.userContent._3ds9._3576').innerText;

        return post

      });

    browser.close();
    return result;
};

testing.map(async seed => {
  const deleteHead = post => {
    const idx = post.indexOf(':');
    return post.slice(idx + 3);
  }
  scrape(seed.url).then((value) => {
    seed.post = deleteHead(value);
      console.log(seed, ','); // Success!
  });
})

module.exports = scrape;
