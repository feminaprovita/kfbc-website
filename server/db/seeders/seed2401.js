const { db } = require('../server/db');
const { green, red } = require('chalk');
const Archive = require('../server/db/archiveModel');
const Tags = require('../server/db/tagModel');
const scrape = require('./scrape')
const puppeteer = require('puppeteer');

const archive = [{
  date: `2018-7-11`,
url: `https://www.facebook.com/feminaprovita/posts/10100234095274440`
},
{
  date: `2018-7-12`,
url: `https://www.facebook.com/feminaprovita/posts/10100234324849370`
},
{
  date: `2018-7-13`,
url: `https://www.facebook.com/feminaprovita/posts/10100234593401190`
},
{
  date: `2018-7-14`,
url: `https://www.facebook.com/feminaprovita/posts/10100234840765470`
},
{
  date: `2018-7-15`,
url: `https://www.facebook.com/feminaprovita/posts/10100235110524870`
},
{
  date: `2018-7-16`,
url: `https://www.facebook.com/feminaprovita/posts/10100235376831190`
},
{
  date: `2018-7-17`,
url: `https://www.facebook.com/feminaprovita/posts/10100235682518590`
},
{
  date: `2018-7-18`,
url: `https://www.facebook.com/feminaprovita/posts/10100236020156960`
},
{
  date: `2018-7-19`,
url: `https://www.facebook.com/feminaprovita/posts/10100236289467260`
},
{
  date: `2018-7-20`,
url: `https://www.facebook.com/feminaprovita/posts/10100236546142880`
},
{
  date: `2018-7-21`,
url: `https://www.facebook.com/feminaprovita/posts/10100236919549570`
},
{
  date: `2018-7-22`,
url: `https://www.facebook.com/feminaprovita/posts/10100237161150400`
},
{
  date: `2018-7-23`,
url: `https://www.facebook.com/feminaprovita/posts/10100237434921760`
},
{
  date: `2018-7-24`,
url: `https://www.facebook.com/feminaprovita/posts/10100237702859810`
},
{
  date: `2018-7-25`,
url: `https://www.facebook.com/feminaprovita/posts/10100238003357610`
},
{
  date: `2018-7-26`,
url: `https://www.facebook.com/feminaprovita/posts/10100238286834520`
},
{
  date: `2018-7-27`,
url: `https://www.facebook.com/feminaprovita/posts/10100238680350910`
},
{
  date: `2018-7-28`,
url: `https://www.facebook.com/feminaprovita/posts/10100238979236940`
},
{
  date: `2018-7-29`,
url: `https://www.facebook.com/feminaprovita/posts/10100239273607020`
},
{
  date: `2018-7-30`,
url: `https://www.facebook.com/feminaprovita/posts/10100239521610020`
},
{
  date: `2018-7-31`,
url: `https://www.facebook.com/feminaprovita/posts/10100239778919370`
},
{
  date: `2018-8-1`,
url: `https://www.facebook.com/feminaprovita/posts/10100240072645740`
},
{
  date: `2018-8-2`,
url: `https://www.facebook.com/feminaprovita/posts/10100240365703450`
},
{
  date: `2018-8-3`,
url: `https://www.facebook.com/feminaprovita/posts/10100240698496530`
},
{
  date: `2018-8-4`,
url: `https://www.facebook.com/feminaprovita/posts/10100240996015300`
},
{
  date: `2018-8-5`,
url: `https://www.facebook.com/feminaprovita/posts/10100241277087030`
},
{
  date: `2018-8-6`,
url: `https://www.facebook.com/feminaprovita/posts/10100241512195870`
},
{
  date: `2018-8-7`,
url: `https://www.facebook.com/feminaprovita/posts/10100241808696680`
},
{
  date: `2018-8-8`,
url: `https://www.facebook.com/feminaprovita/posts/10100242104967950`
},
{
  date: `2018-8-9`,
url: `https://www.facebook.com/feminaprovita/posts/10100242408200270`
},
{
  date: `2018-8-10`,
url: `https://www.facebook.com/feminaprovita/posts/10100242680374830`
},
{
  date: `2018-8-11`,
url: `https://www.facebook.com/feminaprovita/posts/10100243190732070`
},
{
  date: `2018-8-12`,
url: `https://www.facebook.com/feminaprovita/posts/10100243191989550`
},
{
  date: `2018-8-13`,
url: `https://www.facebook.com/feminaprovita/posts/10100243429603370`
},
{
  date: `2018-8-14`,
url: `https://www.facebook.com/feminaprovita/posts/10100243688764010`
},
{
  date: `2018-8-15`,
url: `https://www.facebook.com/feminaprovita/posts/10100243948298900`
},
{
  date: `2018-8-16`,
url: `https://www.facebook.com/feminaprovita/posts/10100244312963110`
},
{
  date: `2018-8-17`,
url: `https://www.facebook.com/feminaprovita/posts/10100244570127750`
},
{
  date: `2018-8-18`,
url: `https://www.facebook.com/feminaprovita/posts/10100244825111760`
},
{
  date: `2018-8-19`,
url: `https://www.facebook.com/feminaprovita/posts/10100245090799320`
},
{
  date: `2018-8-20`,
url: `https://www.facebook.com/feminaprovita/posts/10100245354530800`
},
{
  date: `2018-8-21`,
url: `https://www.facebook.com/feminaprovita/posts/10100245648781120`
},
{
  date: `2018-8-22`,
url: `https://www.facebook.com/feminaprovita/posts/10100245952991480`
},
{
  date: `2018-8-23`,
url: `https://www.facebook.com/feminaprovita/posts/10100246159911810`
},
{
  date: `2018-8-24`,
url: `https://www.facebook.com/feminaprovita/posts/10100246371163460`
},
{
  date: `2018-8-25`,
url: `https://www.facebook.com/feminaprovita/posts/10100246589470970`
},
{
  date: `2018-8-26`,
url: `https://www.facebook.com/feminaprovita/posts/10100246842184530`
},
{
  date: `2018-8-27`,
url: `https://www.facebook.com/feminaprovita/posts/10100247093895100`
},
{
  date: `2018-8-28`,
url: `https://www.facebook.com/feminaprovita/posts/10100247371927920`
},
{
  date: `2018-8-29`,
url: `https://www.facebook.com/feminaprovita/posts/10100247673723120`
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
