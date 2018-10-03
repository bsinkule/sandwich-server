const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const sandwiches = require('./router/sandwiches') // change variable name and change to correct path
const port = process.env.PORT || 5000
const listener = () => console.log(`Listening on port ${port}`)

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use('/sandwiches', sandwiches) // change '/[path]' and variable to match above NEW variable

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    stack: req.app.get('env') === 'development' ? err.stack : {}
  })
})

app.listen(port, listener)

module.exports = app
