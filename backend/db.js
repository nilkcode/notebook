const mongoose = require('mongoose');

const mongoseURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connetToMongo = () => {

    mongoose.connect(mongoseURI, () => {
      console.log("conneted to  mongo successsfully");
    })

}


module.exports = connetToMongo;





/* Mongose deal with promises but in this project we used async and await function in javascript for
request(req) and also response(resp) 

Def:: async and await work like we initilize async at function and it await until promises resolve 
complated resp or request


*/
