const { db } = require('../server/db');
const { green, red } = require('chalk');
const Archive = require('../server/db/archiveModel');
const Tags = require('../server/db/tagModel');
const scrape = require('./scrape')
const puppeteer = require('puppeteer');

const archive = [{
  date: `2018-12-8`,
url: `https://www.facebook.com/feminaprovita/posts/10100276427679960`
},
{
  date: `2018-12-9`,
url: `https://www.facebook.com/feminaprovita/posts/10100276669709930`
},
{
  date: `2018-12-10`,
url: `https://www.facebook.com/feminaprovita/posts/10100276912533310`
},
{
  date: `2018-12-11`,
url: `https://www.facebook.com/feminaprovita/posts/10100277180855590`
},
{
  date: `2018-12-12`,
url: `https://www.facebook.com/feminaprovita/posts/10100277456772650`
},
{
  date: `2018-12-13`,
url: `https://www.facebook.com/feminaprovita/posts/10100277691981290`
},
{
  date: `2018-12-14`,
url: `https://www.facebook.com/feminaprovita/posts/10100278016630690`
},
{
  date: `2018-12-15`,
url: `https://www.facebook.com/feminaprovita/posts/10100278258351280`
},
{
  date: `2018-12-16`,
url: `https://www.facebook.com/feminaprovita/posts/10100278519772390`
},
{
  date: `2018-12-17`,
url: `https://www.facebook.com/feminaprovita/posts/10100278754541910`
},
{
  date: `2018-12-18`,
url: `https://www.facebook.com/feminaprovita/posts/10100279092799040`
},
{
  date: `2018-12-19`,
url: `https://www.facebook.com/feminaprovita/posts/10100279413980390`
},
{
  date: `2018-12-20`,
url: `https://www.facebook.com/feminaprovita/posts/10100279650401600`
},
{
  date: `2018-12-21`,
url: `https://www.facebook.com/feminaprovita/posts/10100279843933760`
},
{
  date: `2018-12-22`,
url: `https://www.facebook.com/feminaprovita/posts/10100280088733180`
},
{
  date: `2018-12-23`,
url: `https://www.facebook.com/feminaprovita/posts/10100280277150590`
},
{
  date: `2018-12-24`,
url: `https://www.facebook.com/feminaprovita/posts/10100280475932230`
},
{
  date: `2018-12-25`,
url: `https://www.facebook.com/feminaprovita/posts/10100280753216550`
},
{
  date: `2018-12-26`,
url: `https://www.facebook.com/feminaprovita/posts/10100281030979910`
},
{
  date: `2018-12-27`,
url: `https://www.facebook.com/feminaprovita/posts/10100281288523790`
},
{
  date: `2018-12-28`,
url: `https://www.facebook.com/feminaprovita/posts/10100281546846110`
},
{
  date: `2018-12-29`,
url: `https://www.facebook.com/feminaprovita/posts/10100281753556860`
},
{
  date: `2018-12-30`,
url: `https://www.facebook.com/feminaprovita/posts/10100282001519940`
},
{
  date: `2018-12-31`,
url: `https://www.facebook.com/feminaprovita/posts/10100282256094770`
},
{
  date: `2019-1-1`,
url: `https://www.facebook.com/feminaprovita/posts/10100282502116740`
},
{
  date: `2019-1-2`,
url: `https://www.facebook.com/feminaprovita/posts/10100282813647430`
},
{
  date: `2019-1-3`,
url: `https://www.facebook.com/feminaprovita/posts/10100283072618450`
},
{
  date: `2019-1-4`,
url: `https://www.facebook.com/feminaprovita/posts/10100283350107360`
},
{
  date: `2019-1-5`,
url: `https://www.facebook.com/feminaprovita/posts/10100283585839950`
},
{
  date: `2019-1-6`,
url: `https://www.facebook.com/feminaprovita/posts/10100283820245200`
},
{
  date: `2019-1-7`,
url: `https://www.facebook.com/feminaprovita/posts/10100284040868070`
},
{
  date: `2019-1-8`,
url: `https://www.facebook.com/feminaprovita/posts/10100284280497850`
},
{
  date: `2019-1-9`,
url: `https://www.facebook.com/feminaprovita/posts/10100284502657640`
},
{
  date: `2019-1-10`,
url: `https://www.facebook.com/feminaprovita/posts/10100284753150650`
},
{
  date: `2019-1-11`,
url: `https://www.facebook.com/feminaprovita/posts/10100285064826050`
},
{
  date: `2019-1-12`,
url: `https://www.facebook.com/feminaprovita/posts/10100285294425930`
},
{
  date: `2019-1-13`,
url: `https://www.facebook.com/feminaprovita/posts/10100285577957730`
},
{
  date: `2019-1-14`,
url: `https://www.facebook.com/feminaprovita/posts/10100285777777290`
},
{
  date: `2019-1-15`,
url: `https://www.facebook.com/feminaprovita/posts/10100286015041810`
},
{
  date: `2019-1-16`,
url: `https://www.facebook.com/feminaprovita/posts/10100286259801310`
},
{
  date: `2019-1-17`,
url: `https://www.facebook.com/feminaprovita/posts/10100286514401090`
},
{date: `2019-1-18`,
url: `https://www.facebook.com/feminaprovita/posts/10100286796560640`}]

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
