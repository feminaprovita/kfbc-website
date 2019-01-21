const { db } = require('../');
const { green, red } = require('chalk');
const Archive = require('../archiveModel');
const Future = require('../futureModel');
const Tags = require('../tagModel');
const archive = require('./archiveSeed.js');
const future = require('./futureSeed.js');


const tags = [
  {tag: 'playlist'},
  {tag: 'food'},
  {tag: 'pop-culture'},
  {tag: 'simple-fave'},
  {tag: 'complex-fave'},
  {tag: 'creative'},
  {tag: 'memories'},
  {tag: 'family'},
  {tag: 'about-you'},
  {tag: 'knowledge'},
  {tag: 'poupourri'},
  {tag: 'serious'},
  {tag: 'xmas'},
  {tag: 'religious'},
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
