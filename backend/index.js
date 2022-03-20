const connetToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connetToMongo();


const app = express()
const port = 5000 


app.use(cors())




/* If want to use content body or want request from body then must use 
middle ware */

/* --middle ware start -- */

app.use(express.json())

/* --middle ware end -- */



//Available Routes code start

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

//Available Routes code end


//listning port code

app.listen(port, () => {
  console.log(`iNotebook Backend listening on port http://localhost:${port}`)
})