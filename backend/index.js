const connetToMongo = require('./db');
const express = require('express')

connetToMongo();


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Nilesh welcome to db!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})