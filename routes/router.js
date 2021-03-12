const express = require('express')
const { home } = require('./renders/home')

const router = express.Router()

router.get('/', home)

module.exports = router