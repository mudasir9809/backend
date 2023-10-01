const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/User')

const app = express()
const port = 3000
let uri = 'mongodb+srv://rogue2:rogue4554@cluster0.e24lw6l.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri)
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors())
app.use(express.json());


app.get('/', async (req, res) => {
    let all = await User.find({})

    res.status(200).json({all:all})
})

app.post('/data', (req, res) => {
    const { name, crush } = req.body;
    User.create({name:name, crush:crush})
    try {
        
        res.status(201).json({ success: true, message: "Invalid phone/email or password" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal sever error" })
    }


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
