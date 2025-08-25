const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
        requrired : true,
    },
      email : {
        type : String,
        unique : true,
        requrired : true,
    },
      password : {
        type : String,
        unique : true,
        requrired : true,
    },
      role : {
        type : String,
         default : 'user'
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;