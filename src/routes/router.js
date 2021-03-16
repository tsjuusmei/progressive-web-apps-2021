const express = require('express')
const { home } = require('./renders/home')
const { offline } = require('./renders/offline')

const router = express.Router()

router.get('/', home)
router.get('/offline', offline)

module.exports = router