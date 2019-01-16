const router = require('express').Router();
const Archive = require('../db/archiveModel');
const Future = require('../db/futureModel');
const Tags = require('../db/tagModel');

router.get('/', async (req, res, next) => {
  try {
    const futureList = await Future.findAll();
    res.json(futureList);
  } catch (err) {
    next(err);
  }
});

router.get('/tags/', async (req, res, next) => {
  try {
    const futureTags = await Tags.findAll();
    res.json(futureTags);
  } catch (err) {
    next(err);
  }
});

router.get('/:ideaId', async (req,res,next) => {
  try {
    const thisIdea = await Future.findById(req.params.ideaId)
    if(thisIdea) res.json(thisIdea);
    else res.sendStatus(404);
  } catch(err) {
    next(err)
  }
})

module.exports = router;
