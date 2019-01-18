const { db } = require('../server/db');
const { green, red } = require('chalk');
const Archive = require('../server/db/archiveModel');
const Future = require('../server/db/futureModel');
const Tags = require('../server/db/tagModel');
const scrape = require('./scrape')
const puppeteer = require('puppeteer');

const archive = [{
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
},
{
  date: `2016-11-25`,
url: `https://www.facebook.com/feminaprovita/posts/953664163660`
},
{
  date: `2016-11-26`,
url: `https://www.facebook.com/feminaprovita/posts/954059172060`
},
{
  date: `2016-11-27`,
url: `https://www.facebook.com/feminaprovita/posts/954404969080`
},
{
  date: `2016-11-28`,
url: `https://www.facebook.com/feminaprovita/posts/954622093960`
},
{
  date: `2016-11-29`,
url: `https://www.facebook.com/feminaprovita/posts/954896678690`
},
{
  date: `2016-11-30`,
url: `https://www.facebook.com/feminaprovita/posts/955144871310`
},
{
  date: `2016-12-1`,
url: `https://www.facebook.com/feminaprovita/posts/955365569030`
},
{
  date: `2016-12-2`,
url: `https://www.facebook.com/feminaprovita/posts/955639804460`
},
{
  date: `2016-12-3`,
url: `https://www.facebook.com/feminaprovita/posts/955866480200`
},
{
  date: `2016-12-4`,
url: `https://www.facebook.com/feminaprovita/posts/956123784560`
},
{
  date: `2016-12-5`,
url: `https://www.facebook.com/feminaprovita/posts/956368668810`
},
{
  date: `2016-12-6`,
url: `https://www.facebook.com/feminaprovita/posts/956605988220`
},
{
  date: `2016-12-7`,
url: `https://www.facebook.com/feminaprovita/posts/956820787760`
},
{
  date: `2016-12-8`,
url: `https://www.facebook.com/feminaprovita/posts/957530021450`
},
{
  date: `2016-12-9`,
url: `https://www.facebook.com/feminaprovita/posts/958327807680`
},
{
  date: `2016-12-10`,
url: `https://www.facebook.com/feminaprovita/posts/958611015130`
},
{
  date: `2016-12-11`,
url: `https://www.facebook.com/feminaprovita/posts/958902975040`
},
{
  date: `2016-12-12`,
url: `https://www.facebook.com/feminaprovita/posts/959127759570`
},
{
  date: `2016-12-13`,
url: `https://www.facebook.com/feminaprovita/posts/959435353150`
},
{
  date: `2016-12-14`,
url: `https://www.facebook.com/feminaprovita/posts/959726604480`
},
{
  date: `2016-12-15`,
url: `https://www.facebook.com/feminaprovita/posts/960086084080`
},
{
  date: `2016-12-16`,
url: `https://www.facebook.com/feminaprovita/posts/960820582140`
},
{
  date: `2016-12-17`,
url: `https://www.facebook.com/feminaprovita/posts/961531592270`
},
{
  date: `2016-12-18`,
url: `https://www.facebook.com/feminaprovita/posts/962206409930`
},
{
  date: `2016-12-19`,
url: `https://www.facebook.com/feminaprovita/posts/962879850350`
},
{
  date: `2016-12-20`,
url: `https://www.facebook.com/feminaprovita/posts/963550351660`
},
{
  date: `2016-12-21`,
url: `https://www.facebook.com/feminaprovita/posts/963940080640`
},
{
  date: `2016-12-22`,
url: `https://www.facebook.com/feminaprovita/posts/964179271300`
},
{
  date: `2016-12-23`,
url: `https://www.facebook.com/feminaprovita/posts/964413546810`
},
{
  date: `2016-12-24`,
url: `https://www.facebook.com/feminaprovita/posts/964655052830`
},
{
  date: `2016-12-25`,
url: `https://www.facebook.com/feminaprovita/posts/964914423050`
},
{
  date: `2016-12-26`,
url: `https://www.facebook.com/feminaprovita/posts/965176862120`
},
{
  date: `2016-12-27`,
url: `https://www.facebook.com/feminaprovita/posts/965446332100`
},
{
  date: `2016-12-28`,
url: `https://www.facebook.com/feminaprovita/posts/965723711230`
},
{
  date: `2016-12-29`,
url: `https://www.facebook.com/feminaprovita/posts/965974648350`
},
{
  date: `2016-12-30`,
url: `https://www.facebook.com/feminaprovita/posts/966294482400`
},
{
  date: `2016-12-31`,
url: `https://www.facebook.com/feminaprovita/posts/966553692940`
},
{
  date: `2017-1-1`,
url: `https://www.facebook.com/feminaprovita/posts/966858062980`
},
{
  date: `2017-1-2`,
url: `https://www.facebook.com/feminaprovita/posts/967174808220`
},
{
  date: `2017-1-3`,
url: `https://www.facebook.com/feminaprovita/posts/967390211550`
},
{
  date: `2017-1-4`,
url: `https://www.facebook.com/feminaprovita/posts/967629442130`
},
{
  date: `2017-1-5`,
url: `https://www.facebook.com/feminaprovita/posts/967858228640`
},
{
  date: `2017-1-6`,
url: `https://www.facebook.com/feminaprovita/posts/968094255640`
},
{
  date: `2017-1-7`,
url: `https://www.facebook.com/feminaprovita/posts/968554413480`
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

const future = [
  {idea: 'instrumental'},
  {idea: `You may play a bit part (background character in one scene, a line or two, at most) in the next installment in any film franchise, even if no further sequels are currently expected. THE CATCH: Each franchise is only claimable by one person!`},
  {idea: 'If diseases were brands, what would their slogans/mottos be?'},
  {idea: 'liturgical/religious composer'},
];

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
    Future.bulkCreate(future, {returning: true}),
    Tags.bulkCreate(tags, {returning: true})
  ])

  const [archiveSeed, futureSeed, tagSeed] = await promiseForInsertedData
  console.log(`seeded ${archiveSeed.length} posts, ${futureSeed.length} ideas, and ${tagSeed.length} tags`)

  db.close();
  console.log(green('Seeding success!'));
};

seed().catch(err => {
  console.error(red('Uh-oh! Something went wrong!'));
  console.error(err);
  db.close();
});
