const express = require('express')
const router = require('./routes/router')
require("dotenv").config();

const app = express()

const port = 3000

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static("static"));
app.use('/', router)
  
// app.listen(port, () => {
//   console.log('Application running on localhost:' + port)
// })

app.listen(process.env.PORT || 3000, () => console.log("Server is running... on port 3000 or Heroku_port"));