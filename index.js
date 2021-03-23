const express = require('express')
const router = require('./src/routes/router.js')
const path = require('path')
require("dotenv").config();

const app = express()
const templates = path.join(__dirname, './src/views')

app
  .set('view engine', 'ejs')
  .set('views', templates)
  .use(function (request, response, next) {

    if (process.env.NODE_ENV != 'development' && !request.secure) {
      return response.redirect("https://" + request.headers.host + request.url);
    }

    next();
  })
  .use(express.static("static"))
  .use('/', router)
  .listen(process.env.PORT || 3000, () => console.log("Server is running... on port 3000 or Heroku_port"))