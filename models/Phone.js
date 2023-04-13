const mongoose = require('mongoose')
const { Schema } = mongoose;
const phoneSechema = new Schema({
    phone:{type:String},
    password: {type: String}
})

module.exports = mongoose.model('Phone', phoneSechema)