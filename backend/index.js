const connectToMongo = require('./db');
const express = require('express')

connectToMongo();


const app = express()
const port = 3000

// Available routes

// app.get('/', (req, res) => {
//   res.send('Your mongo DB connected to 3000 Port Welcome snns')
// })

app.use(express.json())

app.use('/api/auth/', require('./routes/auth'))

app.use('/api/notes/', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})