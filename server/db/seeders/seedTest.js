const scrape = require('./scrape')
const puppeteer = require('puppeteer');

const gsheetsArchive = [{
  date: `2016-11-21`,
url: `https://www.facebook.com/feminaprovita/posts/952377357430`
},
{
  date: `2016-11-22`,
url: `https://www.facebook.com/feminaprovita/posts/952671702560`
},
{
  date: `2016-11-23`,
url: `https://www.facebook.com/feminaprovita/posts/952954600630`
},
{
  date: `2016-11-24`,
url: `https://www.facebook.com/feminaprovita/posts/953303995440`
}];

const deleteHead = post => {
  const idx = post.indexOf(':');
  return post.slice(idx + 3);
}

gsheetsArchive.map(async day => {
  const dailyPost = await scrape(day.url)
  const shortPost = deleteHead(dailyPost);
  day.post = shortPost;
  console.log(day)
  return day;
})
