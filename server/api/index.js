'use strict';

const router = require('express').Router();

router.use('/archive', require('./archiveRoutes'));
router.use('/future', require('./futureRoutes'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
