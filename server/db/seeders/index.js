const { db } = require('../');
const { green, red, magenta } = require('chalk');
const Archive = require('../archiveModel');
const Future = require('../futureModel');
const Tags = require('../tagModel');
const archive = require('./goodOut3.js');

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
