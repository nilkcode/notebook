const mongoose = require('mangoose');

const UserSchema = new Schema({
    name: {
        type:String,
        required:true,
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type: Date,
        required: true,
    },
    date: {
        type:Date,
        required:Date.now
    }

});


module.exports = mongoose.model('user',UserSchema);