'use strict'
const router = require('express').Router();
const archive = require('./archiveRoutes');
const future = require('./futureRoutes');

// router.use('/archive', archive);
// router.use('/ghost-of-questions-yet-to-come', future);

// router.use((req, res, next) => {
//   const err = new Error('API route not found!')
//   err.status = 404
//   next(err)
// })

module.exports = router
