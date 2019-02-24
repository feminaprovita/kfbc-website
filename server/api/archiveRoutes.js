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
  } catch (err) { next(err) }
});

router.get('/tags/', async (req, res, next) => {
  try {
    const archiveTags = await Tags.findAll();
    res.json(archiveTags);
  } catch (err) { next(err) }
});

router.get('/random', async (req, res, next) => {
  try {
    const archiveList = await Archive.findAll();
    res.json(archiveList);
  } catch (err) { next(err) }
});

router.get('/search', async (req,res,next) => {
  try {
    const keywordSearchResults = await Archive.sequelize.query(`
    SELECT *
    FROM ${Archive.posts.post}
    WHERE _search @@ plainto_tsquery('english', :query);
    `, {
      model: Archive.posts,
      replacements: {query: keyword}
    });
    if(keywordSearchResults) res.json(keywordSearchResults).status(201);
    else res.sendStatus(404);
  } catch(err) { next(err) }
})

// copied from wikistack
// router.get("/search", async (req, res, next) => {
//   try {
//     const pages = await Page.findByTag(req.query.search);
//     res.send(main(pages));
//   } catch (error) { next(error) }
// });

router.get('/:postId', async (req,res,next) => {
  try {
    const thisPost = await Archive.findById(req.params.postId)
    if (thisPost) res.json(thisPost);
    else res.sendStatus(404);
  } catch(err) { next(err) }
})

module.exports = router;
