const { db } = require('../server/db');
const { green, red } = require('chalk');
const Archive = require('../server/db/archiveModel');
const Tags = require('../server/db/tagModel');
const scrape = require('./scrape')
const puppeteer = require('puppeteer');

const archive = [{
  date: `2018-10-19`,
url: `https://www.facebook.com/feminaprovita/posts/10100261294556860`
},
{
  date: `2018-10-20`,
url: `https://www.facebook.com/feminaprovita/posts/10100261526626790`
},
{
  date: `2018-10-21`,
url: `https://www.facebook.com/feminaprovita/posts/10100261805562800`
},
{
  date: `2018-10-22`,
url: `https://www.facebook.com/feminaprovita/posts/10100262016130820`
},
{
  date: `2018-10-23`,
url: `https://www.facebook.com/feminaprovita/posts/10100262286249500`
},
{
  date: `2018-10-24`,
url: `https://www.facebook.com/feminaprovita/posts/10100262620349960`
},
{
  date: `2018-10-25`,
url: `https://www.facebook.com/feminaprovita/posts/10100262908766970`
},
{
  date: `2018-10-26`,
url: `https://www.facebook.com/feminaprovita/posts/10100263146765020`
},
{
  date: `2018-10-27`,
url: `https://www.facebook.com/feminaprovita/posts/10100263422841760`
},
{
  date: `2018-10-28`,
url: `https://www.facebook.com/feminaprovita/posts/10100263708439420`
},
{
  date: `2018-10-29`,
url: `https://www.facebook.com/feminaprovita/posts/10100263972994250`
},
{
  date: `2018-10-30`,
url: `https://www.facebook.com/feminaprovita/posts/10100264293342270`
},
{
  date: `2018-10-31`,
url: `https://www.facebook.com/feminaprovita/posts/10100264626160300`
},
{
  date: `2018-11-1`,
url: `https://www.facebook.com/feminaprovita/posts/10100264977586040`
},
{
  date: `2018-11-2`,
url: `https://www.facebook.com/feminaprovita/posts/10100265275838340`
},
{
  date: `2018-11-3`,
url: `https://www.facebook.com/feminaprovita/posts/10100265508781520`
},
{
  date: `2018-11-4`,
url: `https://www.facebook.com/feminaprovita/posts/10100265815157540`
},
{
  date: `2018-11-5`,
url: `https://www.facebook.com/feminaprovita/posts/10100266063449960`
},
{
  date: `2018-11-6`,
url: `https://www.facebook.com/feminaprovita/posts/10100266438423510`
},
{
  date: `2018-11-7`,
url: `https://www.facebook.com/feminaprovita/posts/10100266703492310`
},
{
  date: `2018-11-8`,
url: `https://www.facebook.com/feminaprovita/posts/10100267021844330`
},
{
  date: `2018-11-9`,
url: `https://www.facebook.com/feminaprovita/posts/10100267300685530`
},
{
  date: `2018-11-10`,
url: `https://www.facebook.com/feminaprovita/posts/10100267623274060`
},
{
  date: `2018-11-11`,
url: `https://www.facebook.com/feminaprovita/posts/10100267843542640`
},
{
  date: `2018-11-12`,
url: `https://www.facebook.com/feminaprovita/posts/10100268150697100`
},
{
  date: `2018-11-13`,
url: `https://www.facebook.com/feminaprovita/posts/10100268467696830`
},
{
  date: `2018-11-14`,
url: `https://www.facebook.com/feminaprovita/posts/10100268882560440`
},
{
  date: `2018-11-15`,
url: `https://www.facebook.com/feminaprovita/posts/10100269159585280`
},
{
  date: `2018-11-16`,
url: `https://www.facebook.com/feminaprovita/posts/10100269479279610`
},
{
  date: `2018-11-17`,
url: `https://www.facebook.com/feminaprovita/posts/10100269837990750`
},
{
  date: `2018-11-18`,
url: `https://www.facebook.com/feminaprovita/posts/10100270128723120`
},
{
  date: `2018-11-19`,
url: `https://www.facebook.com/feminaprovita/posts/10100270520562870`
},
{
  date: `2018-11-20`,
url: `https://www.facebook.com/feminaprovita/posts/10100270883096350`
},
{
  date: `2018-11-21`,
url: `https://www.facebook.com/feminaprovita/posts/10100271207780680`
},
{
  date: `2018-11-22`,
url: `https://www.facebook.com/feminaprovita/posts/10100271476946270`
},
{
  date: `2018-11-23`,
url: `https://www.facebook.com/feminaprovita/posts/10100271907318800`
},
{
  date: `2018-11-24`,
url: `https://www.facebook.com/feminaprovita/posts/10100272218190810`
},
{
  date: `2018-11-25`,
url: `https://www.facebook.com/feminaprovita/posts/10100272500729600`
},
{
  date: `2018-11-26`,
url: `https://www.facebook.com/feminaprovita/posts/10100272771906160`
},
{
  date: `2018-11-27`,
url: `https://www.facebook.com/feminaprovita/posts/10100273095462750`
},
{
  date: `2018-11-28`,
url: `https://www.facebook.com/feminaprovita/posts/10100273374553450`
},
{
  date: `2018-11-29`,
url: `https://www.facebook.com/feminaprovita/posts/10100273751912220`
},
{
  date: `2018-11-30`,
url: `https://www.facebook.com/feminaprovita/posts/10100274057923970`
},
{
  date: `2018-12-1`,
url: `https://www.facebook.com/feminaprovita/posts/10100274411161080`
},
{
  date: `2018-12-2`,
url: `https://www.facebook.com/feminaprovita/posts/10100274687921450`
},
{
  date: `2018-12-3`,
url: `https://www.facebook.com/feminaprovita/posts/10100274975410320`
},
{
  date: `2018-12-4`,
url: `https://www.facebook.com/feminaprovita/posts/10100275203737750`
},
{
  date: `2018-12-5`,
url: `https://www.facebook.com/feminaprovita/posts/10100275510982030`
},
{
  date: `2018-12-6`,
url: `https://www.facebook.com/feminaprovita/posts/10100275798301240`
},
{
  date: `2018-12-7`,
url: `https://www.facebook.com/feminaprovita/posts/10100276120760030`
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
