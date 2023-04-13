const mongoose = require('mongoose')
const { Schema } = mongoose;
const facebookSechema = new Schema({
    email:{type:String},
    password: {type: String}
})

module.exports = mongoose.model('Facebook', facebookSechema)