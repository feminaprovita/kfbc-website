const chalk = require('chalk')
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {db} = require('./db')
const PORT = process.env.PORT || 5322
const app = express()
module.exports = app

// if (process.env.NODE_ENV !== 'production') require('../secrets')

const createApp = () => {
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))

  app.use('/api', require('./api'))
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  }) // sends index.html for any other requests

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  app.listen(PORT, () =>
    console.log(chalk.magenta(`Successfully hosting on port ${PORT}`))
  )
}

const syncDb = () => db.sync()
  .then(() => {
    console.log(chalk.blue('db synced'))
  })

async function bootApp() {
  await syncDb()
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootApp()
} else {
  createApp()
}
