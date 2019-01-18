'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*Add altering commands here.
      Return a promise to correctly handle asynchronicity. */
    return queryInterface.bulkInsert('Archives', [{
      id: 3,
      date: '2016-11-23',
      url: 'https://www.facebook.com/feminaprovita/posts/952954600630',
      post: "What's your zombie preparedness plan? (up to you what kind of zombie apocalypse)",
      createdAt: '2019-01-17 19:06:02.058-05',
      updatedAt: '2019-01-17 19:06:02.058-05'
    }, {
      id: 4,
      date: '2016-11-24',
      url: 'https://www.facebook.com/feminaprovita/posts/953303995440',
      post:
       'Tell me about a small, unimportant moment of joy in your life this past year. (Happy Thanksgiving!)',
       createdAt: '2019-01-17 19:06:02.058-05',
       updatedAt: '2019-01-17 19:06:02.058-05'
    }, {
      id: 1,
      date: '2016-11-21',
      url: 'https://www.facebook.com/feminaprovita/posts/952377357430',
      post: 'Defend your favorite pizza toppings.',
      createdAt: '2019-01-17 19:06:02.058-05',
      updatedAt: '2019-01-17 19:06:02.058-05'
    }, {
      id: 2,
      date: '2016-11-22',
      url: 'https://www.facebook.com/feminaprovita/posts/952671702560',
      post: 'Money is no object! (Nor is PTO.) Describe your dream vacation.',
      createdAt: '2019-01-17 19:06:02.058-05',
      updatedAt: '2019-01-17 19:06:02.058-05'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /* Add reverting commands here.
      Return a promise to correctly handle asynchronicity. */
      return queryInterface.bulkDelete('Archives', null, {});
  }
};
