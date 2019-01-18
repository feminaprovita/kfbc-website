const { db } = require('../server/db');
const { green, red } = require('chalk');
const Archive = require('../server/db/archiveModel');
const Tags = require('../server/db/tagModel');
const scrape = require('./scrape')
const puppeteer = require('puppeteer');

const archive = [{
  date: `2018-4-2`,
url: `https://www.facebook.com/feminaprovita/posts/10100207665919080`
},
{
  date: `2018-4-3`,
url: `https://www.facebook.com/feminaprovita/posts/10100207984824990`
},
{
  date: `2018-4-4`,
url: `https://www.facebook.com/feminaprovita/posts/10100208268536430`
},
{
  date: `2018-4-5`,
url: `https://www.facebook.com/feminaprovita/posts/10100208517577350`
},
{
  date: `2018-4-6`,
url: `https://www.facebook.com/feminaprovita/posts/10100208751279010`
},
{
  date: `2018-4-7`,
url: `https://www.facebook.com/feminaprovita/posts/10100209101901360`
},
{
  date: `2018-4-8`,
url: `https://www.facebook.com/feminaprovita/posts/10100209296511360`
},
{
  date: `2018-4-9`,
url: `https://www.facebook.com/feminaprovita/posts/10100209499679210`
},
{
  date: `2018-4-10`,
url: `https://www.facebook.com/feminaprovita/posts/10100209755521500`
},
{
  date: `2018-4-11`,
url: `https://www.facebook.com/feminaprovita/posts/10100210061872570`
},
{
  date: `2018-4-12`,
url: `https://www.facebook.com/feminaprovita/posts/10100210267889710`
},
{
  date: `2018-4-13`,
url: `https://www.facebook.com/feminaprovita/posts/10100210515977540`
},
{
  date: `2018-4-14`,
url: `https://www.facebook.com/feminaprovita/posts/10100210815836620`
},
{
  date: `2018-4-15`,
url: `https://www.facebook.com/feminaprovita/posts/10100211053774790`
},
{
  date: `2018-4-16`,
url: `https://www.facebook.com/feminaprovita/posts/10100211242341900`
},
{
  date: `2018-4-17`,
url: `https://www.facebook.com/feminaprovita/posts/10100211508254010`
},
{
  date: `2018-4-18`,
url: `https://www.facebook.com/feminaprovita/posts/10100211776187070`
},
{
  date: `2018-4-19`,
url: `https://www.facebook.com/feminaprovita/posts/10100212066729820`
},
{
  date: `2018-4-20`,
url: `https://www.facebook.com/feminaprovita/posts/10100212343380410`
},
{
  date: `2018-4-21`,
url: `https://www.facebook.com/feminaprovita/posts/10100212742640290`
},
{
  date: `2018-4-22`,
url: `https://www.facebook.com/feminaprovita/posts/10100212996646260`
},
{
  date: `2018-4-23`,
url: `https://www.facebook.com/feminaprovita/posts/10100213241390790`
},
{
  date: `2018-4-24`,
url: `https://www.facebook.com/feminaprovita/posts/10100213473395850`
},
{
  date: `2018-4-25`,
url: `https://www.facebook.com/feminaprovita/posts/10100213769816820`
},
{
  date: `2018-4-26`,
url: `https://www.facebook.com/feminaprovita/posts/10100213994681190`
},
{
  date: `2018-4-27`,
url: `https://www.facebook.com/feminaprovita/posts/10100214255169170`
},
{
  date: `2018-4-28`,
url: `https://www.facebook.com/feminaprovita/posts/10100214550901520`
},
{
  date: `2018-4-29`,
url: `https://www.facebook.com/feminaprovita/posts/10100214796619100`
},
{
  date: `2018-4-30`,
url: `https://www.facebook.com/feminaprovita/posts/10100214978988630`
},
{
  date: `2018-5-1`,
url: `https://www.facebook.com/feminaprovita/posts/10100215213523620`
},
{
  date: `2018-5-2`,
url: `https://www.facebook.com/feminaprovita/posts/10100215505508480`
},
{
  date: `2018-5-3`,
url: `https://www.facebook.com/feminaprovita/posts/10100215723840940`
},
{
  date: `2018-5-4`,
url: `https://www.facebook.com/feminaprovita/posts/10100215984458660`
},
{
  date: `2018-5-5`,
url: `https://www.facebook.com/feminaprovita/posts/10100216292012320`
},
{
  date: `2018-5-6`,
url: `https://www.facebook.com/feminaprovita/posts/10100216502046410`
},
{
  date: `2018-5-7`,
url: `https://www.facebook.com/feminaprovita/posts/10100216701142420`
},
{
  date: `2018-5-8`,
url: `https://www.facebook.com/feminaprovita/posts/10100216935862040`
},
{
  date: `2018-5-9`,
url: `https://www.facebook.com/feminaprovita/posts/10100217181918940`
},
{
  date: `2018-5-10`,
url: `https://www.facebook.com/feminaprovita/posts/10100217417317200`
},
{
  date: `2018-5-11`,
url: `https://www.facebook.com/feminaprovita/posts/10100217654312260`
},
{
  date: `2018-5-12`,
url: `https://www.facebook.com/feminaprovita/posts/10100217892968990`
},
{
  date: `2018-5-13`,
url: `https://www.facebook.com/feminaprovita/posts/10100218145283350`
},
{
  date: `2018-5-14`,
url: `https://www.facebook.com/feminaprovita/posts/10100218472233140`
},
{
  date: `2018-5-15`,
url: `https://www.facebook.com/feminaprovita/posts/10100218659647560`
},
{
  date: `2018-5-16`,
url: `https://www.facebook.com/feminaprovita/posts/10100218907371120`
},
{
  date: `2018-5-17`,
url: `https://www.facebook.com/feminaprovita/posts/10100219183058640`
},
{
  date: `2018-5-18`,
url: `https://www.facebook.com/feminaprovita/posts/10100219447229240`
},
{
  date: `2018-5-19`,
url: `https://www.facebook.com/feminaprovita/posts/10100219692537640`
},
{
  date: `2018-5-20`,
url: `https://www.facebook.com/feminaprovita/posts/10100219892746420`
},
{
  date: `2018-5-21`,
url: `https://www.facebook.com/feminaprovita/posts/10100220100070940`
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
