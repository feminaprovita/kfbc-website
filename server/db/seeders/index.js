const { db } = require('../');
const { green, red, magenta } = require('chalk');
const Archive = require('../archiveModel');
const Future = require('../futureModel');
const Tags = require('../tagModel');
const archive = require('./manualSeed.js');

// const scrape = require('./scrape')
// const puppeteer = require('puppeteer');
// const seed001 = require('./seed001');
// const seed201 = require('./seed201');
// const seed401 = require('./seed401');
// const seed601 = require('./seed601');
// const seed801 = require('./seed801');
// const seed1001 = require('./seed1001');
// const seed1201 = require('./seed1201');
// const seed1401 = require('./seed1401');
// const seed1601 = require('./seed1601');
// const seed1801 = require('./seed1801');
// const seed2001 = require('./seed2001');
// const seed2201 = require('./seed2201');
// const seed2401 = require('./seed2401');
// const seed2601 = require('./seed2601');
// const seed2801 = require('./seed2801');
// const seed3001 = require('./seed3001');
// const tinySeed1 = require('./tinySeed1');
// const tinySeed2 = require('./tinySeed2');

// emitter.setMaxListeners();


// const populateArchive = (nestedArrOfSeedArrs) => {
//   const deleteHead = post => {
//     const idx = post.indexOf(':');
//     return post.slice(idx + 3);
//   }
//   const flattenForever = (array, result = []) => {
//     for (let i = 0; i < array.length; i++) {
//       if (Array.isArray(array[i])) flattenForever(array[i], result)
//       else result.push(array[i])
//     }
//     return result
//   }
//   nestedArrOfSeedArrs.map(seedArr => {
//     seedArr.map(async day => {
//       try {
//         const dailyPost = await scrape(day.url)
//       } catch(err) {
//         console.error(err)
//       }
//       const shortPost = deleteHead(dailyPost);
//       day.post = shortPost;
//       return day;
//     })
//     return seedArr;
//   })
//   return flattenForever(nestedArrOfSeedArrs);
// }

// const allSeeds = [seed001, seed201, seed401, seed601, seed801, seed1001, seed1201, seed1401, seed1601, seed1801, seed2001, seed2201, seed2401, seed2601, seed2801, seed3001];

// const archive = populateArchive([tinySeed1, tinySeed2]);
// console.log(populateArchive([tinySeed1, tinySeed2]))


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
