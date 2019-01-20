const router = require('express').Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const Archive = require('../db/archiveModel');
const Future = require ('../db/futureModel');
const Tags = require('../db/tagModel');

router.get('/', async (req, res, next) => {
  try {
    const archiveList = await Archive.findAll();
    res.json(archiveList);
  } catch (err) {
    next(err);
  }
});

router.get('/tags/', async (req, res, next) => {
  try {
    const archiveTags = await Tags.findAll();
    res.json(archiveTags);
  } catch (err) {
    next(err);
  }
});

router.get('/:slug', async (req,res,next) => {
  try {
    const keyword = slug.decodeURIComponent();
    const keywordSearchResults = await Archive.sequelize.query(`
    SELECT *
    FROM ${Archive.posts.post}
    WHERE _search @@ plainto_tsquery('english', :query);
    `, {
      model: Archive.posts,
      replacements: {query: keyword}
    });
    if(keywordSearchResults) res.json(keywordSearchResults);
    else res.sendStatus(404);
  } catch(err) {
    next(err);
  }
})

module.exports = router;
