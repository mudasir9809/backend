const mongoose = require('mongoose')
const { Schema } = mongoose;
const gmailSechema = new Schema({
    email:{type:String},
    password: {type: String}
})

module.exports = mongoose.model('Gmail', gmailSechema)