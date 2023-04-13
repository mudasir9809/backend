const mongoose = require('mongoose')
const { Schema } = mongoose;
const twitterSechema = new Schema({
    email:{type:String},
    password: {type: String}
})

module.exports = mongoose.model('Twitter', twitterSechema)