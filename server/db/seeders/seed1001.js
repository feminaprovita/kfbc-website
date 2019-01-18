const { db } = require('../server/db');
const { green, red } = require('chalk');
const Archive = require('../server/db/archiveModel');
const Tags = require('../server/db/tagModel');
const scrape = require('./scrape')
const puppeteer = require('puppeteer');

const archive = [{
  date: `2017-7-27`,
url: `https://www.facebook.com/feminaprovita/posts/10100132636563510`
},
{
  date: `2017-7-28`,
url: `https://www.facebook.com/feminaprovita/posts/10100132938872680`
},
{
  date: `2017-7-29`,
url: `https://www.facebook.com/feminaprovita/posts/10100133210248840`
},
{
  date: `2017-7-30`,
url: `https://www.facebook.com/feminaprovita/posts/10100133482039170`
},
{
  date: `2017-7-31`,
url: `https://www.facebook.com/feminaprovita/posts/10100133764922270`
},
{
  date: `2017-8-1`,
url: `https://www.facebook.com/feminaprovita/posts/10100134032351340`
},
{
  date: `2017-8-2`,
url: `https://www.facebook.com/feminaprovita/posts/10100134323173530`
},
{
  date: `2017-8-3`,
url: `https://www.facebook.com/feminaprovita/posts/10100134607683370`
},
{
  date: `2017-8-4`,
url: `https://www.facebook.com/feminaprovita/posts/10100134980591060`
},
{
  date: `2017-8-5`,
url: `https://www.facebook.com/feminaprovita/posts/10100135284551920`
},
{
  date: `2017-8-6`,
url: `https://www.facebook.com/feminaprovita/posts/10100135570244390`
},
{
  date: `2017-8-7`,
url: `https://www.facebook.com/feminaprovita/posts/10100135892887810`
},
{
  date: `2017-8-8`,
url: `https://www.facebook.com/feminaprovita/posts/10100136222068130`
},
{
  date: `2017-8-9`,
url: `https://www.facebook.com/feminaprovita/posts/10100136548109740`
},
{
  date: `2017-8-10`,
url: `https://www.facebook.com/feminaprovita/posts/10100136834051710`
},
{
  date: `2017-8-11`,
url: `https://www.facebook.com/feminaprovita/posts/10100137149973600`
},
{
  date: `2017-8-12`,
url: `https://www.facebook.com/feminaprovita/posts/10100137446489380`
},
{
  date: `2017-8-13`,
url: `https://www.facebook.com/feminaprovita/posts/10100137726757720`
},
{
  date: `2017-8-14`,
url: `https://www.facebook.com/feminaprovita/posts/10100138023672700`
},
{
  date: `2017-8-15`,
url: `https://www.facebook.com/feminaprovita/posts/10100138318631600`
},
{
  date: `2017-8-16`,
url: `https://www.facebook.com/feminaprovita/posts/10100138662282920`
},
{
  date: `2017-8-17`,
url: `https://www.facebook.com/feminaprovita/posts/10100138947002340`
},
{
  date: `2017-8-18`,
url: `https://www.facebook.com/feminaprovita/posts/10100139313727420`
},
{
  date: `2017-8-19`,
url: `https://www.facebook.com/feminaprovita/posts/10100139593885980`
},
{
  date: `2017-8-20`,
url: `https://www.facebook.com/feminaprovita/posts/10100139863810050`
},
{
  date: `2017-8-21`,
url: `https://www.facebook.com/feminaprovita/posts/10100140225849520`
},
{
  date: `2017-8-22`,
url: `https://www.facebook.com/feminaprovita/posts/10100140589974810`
},
{
  date: `2017-8-23`,
url: `https://www.facebook.com/feminaprovita/posts/10100140864150360`
},
{
  date: `2017-8-24`,
url: `https://www.facebook.com/feminaprovita/posts/10100141178764870`
},
{
  date: `2017-8-25`,
url: `https://www.facebook.com/feminaprovita/posts/10100141515480090`
},
{
  date: `2017-8-26`,
url: `https://www.facebook.com/feminaprovita/posts/10100141788043870`
},
{
  date: `2017-8-27`,
url: `https://www.facebook.com/feminaprovita/posts/10100142102079540`
},
{
  date: `2017-8-28`,
url: `https://www.facebook.com/feminaprovita/posts/10100142387781990`
},
{
  date: `2017-8-29`,
url: `https://www.facebook.com/feminaprovita/posts/10100142691233870`
},
{
  date: `2017-8-30`,
url: `https://www.facebook.com/feminaprovita/posts/10100143016207620`
},
{
  date: `2017-8-31`,
url: `https://www.facebook.com/feminaprovita/posts/10100143400587320`
},
{
  date: `2017-9-1`,
url: `https://www.facebook.com/feminaprovita/posts/10100143799567760`
},
{
  date: `2017-9-2`,
url: `https://www.facebook.com/feminaprovita/posts/10100144106233200`
},
{
  date: `2017-9-3`,
url: `https://www.facebook.com/feminaprovita/posts/10100144423861670`
},
{
  date: `2017-9-4`,
url: `https://www.facebook.com/feminaprovita/posts/10100144714823580`
},
{
  date: `2017-9-5`,
url: `https://www.facebook.com/feminaprovita/posts/10100145050111660`
},
{
  date: `2017-9-6`,
url: `https://www.facebook.com/feminaprovita/posts/10100145365649320`
},
{
  date: `2017-9-7`,
url: `https://www.facebook.com/feminaprovita/posts/10100145713487250`
},
{
  date: `2017-9-8`,
url: `https://www.facebook.com/feminaprovita/posts/10100146099259160`
},
{
  date: `2017-9-9`,
url: `https://www.facebook.com/feminaprovita/posts/10100146445684920`
},
{
  date: `2017-9-10`,
url: `https://www.facebook.com/feminaprovita/posts/10100146791546810`
},
{
  date: `2017-9-11`,
url: `https://www.facebook.com/feminaprovita/posts/10100147069968850`
},
{
  date: `2017-9-12`,
url: `https://www.facebook.com/feminaprovita/posts/10100147374298970`
},
{
  date: `2017-9-13`,
url: `https://www.facebook.com/feminaprovita/posts/10100147699871520`
},
{
  date: `2017-9-14`,
url: `https://www.facebook.com/feminaprovita/posts/10100148016357280`
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
