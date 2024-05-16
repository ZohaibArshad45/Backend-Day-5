// 1, install express
// 2, install cookie-parser

const express = require('express')
const { Session } = require('inspector')
const app = express()



// for Session and ccokies we need to use this two lines
// this help us to 

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
