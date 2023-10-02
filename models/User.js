const mongoose = require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
    name:{type:String},
    crush: {type: String},
    value: {type:String}
})

module.exports = mongoose.model('User', userSchema)
