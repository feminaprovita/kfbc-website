const { db } = require('./server/db');
const { green, red } = require('chalk');
const Archive = require('./server/db/archiveModel');
const Future = require('./server/db/futureModel');
const Tags = require('./server/db/tagModel');

const archive = [
  {
    post: 'Defend your favorite pizza toppings.',
    url: 'https://www.facebook.com/feminaprovita/posts/952377357430',
    date: '2016-11-21',
    archiveTag: 'food',
  },
  {
    post: 'Money is no object! (Nor is PTO.) Describe your dream vacation.',
    url: 'https://www.facebook.com/feminaprovita/posts/952671702560',
    date: '2016-11-22',
    archiveTag: 'places',
  },
  {
    post: `What's your zombie preparedness plan? (up to you what kind of zombie apocalypse)`,
    url: 'https://www.facebook.com/feminaprovita/posts/952954600630',
    date: '2016-11-23',
    archiveTag: 'zany',
  },
  {
    post: `Tell me about a small, unimportant moment of joy in your life this past year. (Happy Thanksgiving!)`,
    url: 'https://www.facebook.com/feminaprovita/posts/953303995440',
    date: '2016-11-24',
  },
  {
    post: `What's a toy that you desperately wanted as a child but never received? Would you still want one?`,
    url: 'https://www.facebook.com/feminaprovita/posts/953664163660',
    date: '2016-11-25',
    archiveTag: 'memories',
  },
  {
    post: `Tell me a joke!`,
    url: 'https://www.facebook.com/feminaprovita/posts/954059172060',
    date: '2016-11-26',
  },
  {
    post: `Who is your confirmation saint? Why did you choose them? Have they played an expanded role in your life since?`,
    url: 'https://www.facebook.com/feminaprovita/posts/954404969080',
    date: '2016-11-27',
    archiveTag: 'religious',
  },
];

const future = [
  {
    idea: 'instrumental',
    futureTag: 'playlist',
  },
  {
    idea: `You may play a bit part (background character in one scene, a line or two, at most) in the next installment in any film franchise, even if no further sequels are currently expected. THE CATCH: Each franchise is only claimable by one person!`,
    futureTag: 'pop-culture',
  },
  {
    idea: 'If diseases were brands, what would their slogans/mottos be?',
    futureTag: 'zany',
  },
  {
    idea: 'liturgical/religious composer',
    futureTag: 'religious',
  },
];

const tags = [
  {
    tag: 'playlist',
  },
  {
    tag: 'religious',
  },
  {
    tag: 'food',
  },
  {
    tag: 'pop-culture',
  },
  {
    tag: 'zany',
  },
  {
    tag: 'memories',
  },
  {
    tag: 'places',
  },
];

const seed = async () => {
  await db.sync({ force: true });
  await Promise.all(
    archive.map(async post => {
      const fullArchive = await Archive.create(post);
      return fullArchive;
    })
  );
  await Promise.all(
    future.map(async idea => {
      const fullList = await Future.create(idea);
      return fullList;
    })
  );
  await Promise.all(
    tags.map(async tag => {
      const allTags = await Tags.create(tag);
      return allTags;
    })
  );
  db.close();
  console.log(green('Seeding success!'));
};

seed().catch(err => {
  console.error(red('Uh-oh! Something went wrong!'));
  console.error(err);
  db.close();
});
