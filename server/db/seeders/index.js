const { db } = require('../');
const { green, red, magenta } = require('chalk');
const Archive = require('../archiveModel');
const Future = require('../futureModel');
const Tags = require('../tagModel');

const scrape = require('./scrape')
const puppeteer = require('puppeteer');
const seed001 = require('./seed001.js');
const seed201 = require('./seed201.js');
const seed401 = require('./seed401.js');
const seed601 = require('./seed601.js');
const seed801 = require('./seed801.js');
const seed1001 = require('./seed1001.js');
const seed1201 = require('./seed1201.js');
const seed1401 = require('./seed1401.js');
const seed1601 = require('./seed1601.js');
const seed1801 = require('./seed1801.js');
const seed2001 = require('./seed2001.js');
const seed2201 = require('./seed2201.js');
const seed2401 = require('./seed2401.js');
const seed2601 = require('./seed2601.js');
const seed2801 = require('./seed2801.js');
const seed3001 = require('./seed3001.js');

emitter.setMaxListeners();


const populateArchive = (nestedArrOfSeedArrs) => {
  const deleteHead = post => {
    const idx = post.indexOf(':');
    return post.slice(idx + 3);
  }
  const flattenForever = (array, result = []) => {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) flattenForever(array[i], result)
      else result.push(array[i])
    }
    return result
  }
  nestedArrOfSeedArrs.map(async seedArr => {
    await seedArr.map(async day => {
      const dailyPost = await scrape(day.url)
      const shortPost = deleteHead(dailyPost);
      day.post = shortPost;
      return day;
    })
    return seedArr;
  })
  return flattenForever(nestedArrOfSeedArrs);
}

const allSeeds = [seed001, seed201, seed401, seed601, seed801, seed1001, seed1201, seed1401, seed1601, seed1801, seed2001, seed2201, seed2401, seed2601, seed2801, seed3001];

const archive = populateArchive([seed001, seed201]);
console.log(populateArchive([seed001, seed201]))


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
