const api = require('./api')
const express = require('express')

module.exports = app => {
  app.use(express.json())
  app.use('/api', api)
}