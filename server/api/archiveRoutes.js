const router = require('express').Router();
const Archive = require('../db/archiveModel');
const Future = require('../db/futureModel');
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

module.exports = router;
