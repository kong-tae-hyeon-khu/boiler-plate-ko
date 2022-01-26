const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true, // 공백을 없애주는 역활
        unique : 1
    },
    password: {
        type : String,
        minlength: 5
    },
    role : {
        type : Number,
        default: 0
    },
    image : String,
    token : {
        type : String,
    },
    tokenExp : {
        // 토크 유효 기간
        type : Number
    }
})

const User = moongoose.model('User', userSchema);

module.exports = { User };