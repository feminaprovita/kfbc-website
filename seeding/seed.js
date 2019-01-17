const { db } = require('../server/db');
const { green, red } = require('chalk');
const Archive = require('../server/db/archiveModel');
const Future = require('../server/db/futureModel');
const Tags = require('../server/db/tagModel');

const archive = [
  {
    post: 'Defend your favorite pizza toppings.',
    url: 'https://www.facebook.com/feminaprovita/posts/952377357430',
    date: '2016-11-21'
  },
  {
    post: 'Money is no object! (Nor is PTO.) Describe your dream vacation.',
    url: 'https://www.facebook.com/feminaprovita/posts/952671702560',
    date: '2016-11-22'
  },
  {
    post: `What's your zombie preparedness plan? (up to you what kind of zombie apocalypse)`,
    url: 'https://www.facebook.com/feminaprovita/posts/952954600630',
    date: '2016-11-23'
  },
  {
    post: `Tell me about a small, unimportant moment of joy in your life this past year. (Happy Thanksgiving!)`,
    url: 'https://www.facebook.com/feminaprovita/posts/953303995440',
    date: '2016-11-24'
  },
  {
    post: `What's a toy that you desperately wanted as a child but never received? Would you still want one?`,
    url: 'https://www.facebook.com/feminaprovita/posts/953664163660',
    date: '2016-11-25'
  },
  {
    post: `Tell me a joke!`,
    url: 'https://www.facebook.com/feminaprovita/posts/954059172060',
    date: '2016-11-26'
  },
  {
    post: `Who is your confirmation saint? Why did you choose them? Have they played an expanded role in your life since?`,
    url: 'https://www.facebook.com/feminaprovita/posts/954404969080',
    date: '2016-11-27'
  },
];

const future = [
  {
    idea: 'instrumental'
  },
  {
    idea: `You may play a bit part (background character in one scene, a line or two, at most) in the next installment in any film franchise, even if no further sequels are currently expected. THE CATCH: Each franchise is only claimable by one person!`
  },
  {
    idea: 'If diseases were brands, what would their slogans/mottos be?'
  },
  {
    idea: 'liturgical/religious composer'
  },
];

const tags = [
  {
    tag: 'playlist'
  },
  {
    tag: 'religious'
  },
  {
    tag: 'food'
  },
  {
    tag: 'pop-culture'
  },
  {
    tag: 'zany'
  },
  {
    tag: 'memories'
  },
  {
    tag: 'places'
  },
];

const seed = async () => {
  await db.sync({ force: true });
  const archiveSeed = await Promise.all(
    archive.map(async post => {
      const fullArchive = await Archive.create(post);
      return fullArchive;
    })
  );
  const futureSeed = await Promise.all(
    future.map(async idea => {
      const fullList = await Future.create(idea);
      return fullList;
    })
  );
  const tagSeed = await Promise.all(
    tags.map(async tag => {
      const allTags = await Tags.create(tag);
      return allTags;
    })
  );
  console.log(`seeded ${archiveSeed.length} posts, ${futureSeed.length} ideas, and ${tagSeed.length} tags`)
  // seed associations
  const [pizza, vacation, zombie, thanksgiving, toy, joke, confirmation] = archiveSeed
  const [instrumental, bitPart, diseases, composer] = futureSeed
  const [playlist, religious, food, popCulture, zany, memories, places] = tagSeed

  await Promise.all([
    pizza.setTags(food),
    vacation.setTags(places),
    zombie.setTags(zany),
    thanksgiving.setTags(memories),
    toy.setTags(memories),
    joke.setTags(zany),
    confirmation.setTags(religious),

    instrumental.setTags(playlist),
    bitPart.setTags(popCulture),
    diseases.setTags(zany),
    composer.setTags(religious),
  ])
  console.log(`associations seeded`)
  db.close();
  console.log(green('Seeding success!'));
};

seed().catch(err => {
  console.error(red('Uh-oh! Something went wrong!'));
  console.error(err);
  db.close();
});
