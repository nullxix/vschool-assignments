const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const Hashbrown = require('./models/Hashbrown.js')
const jwt = require('express-jwt')
const path = require('path')

//env loaded?
process.env.INIT_MSG && console.log(process.env.INIT_MSG)

//init db
mongoose.connect('mongodb://localhost:27017', 
                    {useNewUrlParser: true, 
                     useUnifiedTopology: true}, 
                     err => {err && console.log(err)})



//routing
app.route('/')
    .get((req, res, next) => {
        res.sendFile(path.join(__dirname + '/www/splash.htm'))
    })

app.route('/login')
    .get((req, res, next) => {
        res.sendFile(path.join(__dirname + '/www/login.htm'))
    })

app.route('/register')
    .get((req, res, next) => {
        res.sendFile(path.join(__dirname + '/www/register.htm'))
    })




// bcrypt.genSalt(6, (err, salt) => {
//     err && console.log(err)
//     bcrypt.hash(process.env.TEST_PSWRD, Number(process.env.TEST_SALT_ROUNDS), (err, hash) => {
//         err && console.log(err)

//         const newHash = new Hashbrown({hash: hash, name: 'LUCARIO'})
//         newHash.save({}, (err,doc) => {
//             err && console.log(err)
//             console.log(doc)
//         })
//     })
// })


//Start server
app.listen(Number(process.env.PORT_NUMBER), () => console.log(`server listenin\' on ${process.env.PORT_NUMBER}`))