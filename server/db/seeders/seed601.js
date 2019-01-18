const { db } = require('../server/db');
const { green, red } = require('chalk');
const Archive = require('../server/db/archiveModel');
const Tags = require('../server/db/tagModel');
const scrape = require('./scrape')
const puppeteer = require('puppeteer');

const archive = [{
  date: `2017-4-18`,
url: `https://www.facebook.com/feminaprovita/posts/999380607540`
},
{
  date: `2017-4-19`,
url: `https://www.facebook.com/feminaprovita/posts/999656414820`
},
{
  date: `2017-4-20`,
url: `https://www.facebook.com/feminaprovita/posts/1000008384470`
},
{
  date: `2017-4-21`,
url: `https://www.facebook.com/feminaprovita/posts/1000317025950`
},
{
  date: `2017-4-22`,
url: `https://www.facebook.com/feminaprovita/posts/1000623651470`
},
{
  date: `2017-4-23`,
url: `https://www.facebook.com/feminaprovita/posts/1000897896880`
},
{
  date: `2017-4-24`,
url: `https://www.facebook.com/feminaprovita/posts/1001147312050`
},
{
  date: `2017-4-25`,
url: `https://www.facebook.com/feminaprovita/posts/10100099234321870`
},
{
  date: `2017-4-26`,
url: `https://www.facebook.com/feminaprovita/posts/10100099535134040`
},
{
  date: `2017-4-27`,
url: `https://www.facebook.com/feminaprovita/posts/10100099810651900`
},
{
  date: `2017-4-28`,
url: `https://www.facebook.com/feminaprovita/posts/10100100102576880`
},
{
  date: `2017-4-29`,
url: `https://www.facebook.com/feminaprovita/posts/10100100386173550`
},
{
  date: `2017-4-30`,
url: `https://www.facebook.com/feminaprovita/posts/10100100661955880`
},
{
  date: `2017-5-1`,
url: `https://www.facebook.com/feminaprovita/posts/10100100911191410`
},
{
  date: `2017-5-2`,
url: `https://www.facebook.com/feminaprovita/posts/10100101212692200`
},
{
  date: `2017-5-3`,
url: `https://www.facebook.com/feminaprovita/posts/10100101608209580`
},
{
  date: `2017-5-4`,
url: `https://www.facebook.com/feminaprovita/posts/10100101852115790`
},
{
  date: `2017-5-5`,
url: `https://www.facebook.com/feminaprovita/posts/10100102142074710`
},
{
  date: `2017-5-6`,
url: `https://www.facebook.com/feminaprovita/posts/10100102464428710`
},
{
  date: `2017-5-7`,
url: `https://www.facebook.com/feminaprovita/posts/10100102777047220`
},
{
  date: `2017-5-8`,
url: `https://www.facebook.com/feminaprovita/posts/10100103152025760`
},
{
  date: `2017-5-9`,
url: `https://www.facebook.com/feminaprovita/posts/10100103565801550`
},
{
  date: `2017-5-10`,
url: `https://www.facebook.com/feminaprovita/posts/10100103873365190`
},
{
  date: `2017-5-11`,
url: `https://www.facebook.com/feminaprovita/posts/10100104130205480`
},
{
  date: `2017-5-12`,
url: `https://www.facebook.com/feminaprovita/posts/10100104435044580`
},
{
  date: `2017-5-13`,
url: `https://www.facebook.com/feminaprovita/posts/10100104709724120`
},
{
  date: `2017-5-14`,
url: `https://www.facebook.com/feminaprovita/posts/10100105007133110`
},
{
  date: `2017-5-15`,
url: `https://www.facebook.com/feminaprovita/posts/10100105274656990`
},
{
  date: `2017-5-16`,
url: `https://www.facebook.com/feminaprovita/posts/10100105554970240`
},
{
  date: `2017-5-17`,
url: `https://www.facebook.com/feminaprovita/posts/10100105830228620`
},
{
  date: `2017-5-18`,
url: `https://www.facebook.com/feminaprovita/posts/10100106210925700`
},
{
  date: `2017-5-19`,
url: `https://www.facebook.com/feminaprovita/posts/10100106497556290`
},
{
  date: `2017-5-20`,
url: `https://www.facebook.com/feminaprovita/posts/10100106875962960`
},
{
  date: `2017-5-21`,
url: `https://www.facebook.com/feminaprovita/posts/10100107258745860`
},
{
  date: `2017-5-22`,
url: `https://www.facebook.com/feminaprovita/posts/10100107573470150`
},
{
  date: `2017-5-23`,
url: `https://www.facebook.com/feminaprovita/posts/10100107868159590`
},
{
  date: `2017-5-24`,
url: `https://www.facebook.com/feminaprovita/posts/10100108288367490`
},
{
  date: `2017-5-25`,
url: `https://www.facebook.com/feminaprovita/posts/10100108622497890`
},
{
  date: `2017-5-26`,
url: `https://www.facebook.com/feminaprovita/posts/10100109104706540`
},
{
  date: `2017-5-27`,
url: `https://www.facebook.com/feminaprovita/posts/10100109432848940`
},
{
  date: `2017-5-28`,
url: `https://www.facebook.com/feminaprovita/posts/10100109761879560`
},
{
  date: `2017-5-29`,
url: `https://www.facebook.com/feminaprovita/posts/10100110045690800`
},
{
  date: `2017-5-30`,
url: `https://www.facebook.com/feminaprovita/posts/10100110367900090`
},
{
  date: `2017-5-31`,
url: `https://www.facebook.com/feminaprovita/posts/10100110779490260`
},
{
  date: `2017-6-1`,
url: `https://www.facebook.com/feminaprovita/posts/10100111124563730`
},
{
  date: `2017-6-2`,
url: `https://www.facebook.com/feminaprovita/posts/10100111421079510`
},
{
  date: `2017-6-3`,
url: `https://www.facebook.com/feminaprovita/posts/10100111791402380`
},
{
  date: `2017-6-4`,
url: `https://www.facebook.com/feminaprovita/posts/10100112201949640`
},
{
  date: `2017-6-5`,
url: `https://www.facebook.com/feminaprovita/posts/10100112479872680`
},
{
  date: `2017-6-6`,
url: `https://www.facebook.com/feminaprovita/posts/10100112873254340`
}]

const deleteHead = post => {
  const idx = post.indexOf(':');
  return post.slice(idx + 3);
}

archive.map(async day => {
  const dailyPost = await scrape(day.url)
  const shortPost = deleteHead(dailyPost);
  day.post = shortPost;
  return day;
})


const tags = [
  {tag: 'playlist'},
  {tag: 'religious'},
  {tag: 'food'},
  {tag: 'pop-culture'},
  {tag: 'zany'},
  {tag: 'memories'},
  {tag: 'places'},
];

const seed = async () => {
  await db.sync({ force: true });

  const promiseForInsertedData = Promise.all([
    Archive.bulkCreate(archive, {returning: true}),
    Tags.bulkCreate(tags, {returning: true})
  ])

  const [archiveSeed, tagSeed] = await promiseForInsertedData
  console.log(`seeded ${archiveSeed.length} posts and ${tagSeed.length} tags`)

  db.close();
  console.log(green('Seeding success!'));
};

seed().catch(err => {
  console.error(red('Uh-oh! Something went wrong!'));
  console.error(err);
  db.close();
});
