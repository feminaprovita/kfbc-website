const puppeteer = require('puppeteer');
const testing = require('./lastSeed');

const test = 'https://www.facebook.com/feminaprovita/posts/10100282256094770';
const today = 'https://www.facebook.com/feminaprovita/posts/10100286514401090';
const playlist = 'https://www.facebook.com/feminaprovita/posts/10100163154450420';

let scrape = async (url) => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto(url);

      const result = await page.evaluate(() => {
        // let date = document.querySelector('.timestampContent').innerText;
        let post = document.querySelector('._5pbx.userContent._3ds9._3576');
        if(!post) post = document.querySelector('._5pbx.userContent._3576');

        return post.innerText;

      });

    browser.close();
    return result;
};

const whatever = arr => {
  return arr.map(seed => {
    return scrape(seed.url).then((value) => {
      const postText = value.replace(/^Today's keep-facebook-cheerful conversation starter:\n\n/g, '');
      if(postText.length !== value.length) seed.post = postText;
      else seed.editPost = value;

        console.log(JSON.stringify(seed)); // Success!
        console.log(',')
        return seed;
    }).catch(() => console.log('ZZZZZZZZZZZZZ' + seed.url));
  })
}

// whatever(testing);

// const newFunc = async(arr,num=10) => {
//   let output = [];
//   for (let i = 0; i < arr.length; i += num) {
//     let s = arr.slice(i,i+num);
//     let t = await Promise.all(whatever(s));
//     output = output.concat(t);
//   }
//   console.log(JSON.stringify(output))
//   return output;
// }


const newFunc2 = async(arr,num=10) => {
  console.log('[')
  for (let i = 0; i < arr.length; i += num) {
    let s = arr.slice(i,i+num);
    let t = await Promise.all(whatever(s));
    // console.log(JSON.stringify(t));
  }
  console.log(']')

}
newFunc2(testing);

module.exports = scrape;
