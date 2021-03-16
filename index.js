const express = require('express')
const router = require('./src/routes/router.js')
const path = require('path')
require("dotenv").config();

const app = express()
const templates = path.join(__dirname, './src/views')

app.set('view engine', 'ejs')
app.set('views', templates)

app.use(express.static("static"));
app.use('/', router)

app.listen(process.env.PORT || 3000, () => console.log("Server is running... on port 3000 or Heroku_port"));