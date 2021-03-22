const express = require('express')
const { home } = require('./renders/home')
const { offline } = require('./renders/offline')
const { detail } = require('./renders/detail')

const router = express.Router()

router
  .get('/', home)
  .get('/offline', offline)
  .get('/sol/:sol', detail)
  .get("*", (req, res) => {
    res.status(404).render("404", {title: "404 Not Found"})
  }) 

module.exports = router