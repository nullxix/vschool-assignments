const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Wizard = require('./models/wizard.js')
const db = require('./db.js')

//initialize database
const dbName = "magic-db"
mongoose.connect(`mongodb://localhost:27017/{dbName}`, {useNewUrlParser: true})
    .then(() => console.log("connected to", dbName))
    .catch(err => console.log(err))

//initialize server
app.use(express.json()) //everybody loves jason <3 <3 :3
app.listen(2020, () => {
    console.log("THE FUTURE IS NEAR")
})

//routing
app.route('/')
    .get( (req, res, next) => {
       res.send("wizard")
    })

app.route('/wizard')
    .get( (req, res, next) => {
        Wizard.find((err, docs) => {
            if(err)
                return next(err)
            return res.status(200).send(docs)
        })
    })
    .post((req, res, next) => {
        const newWiz = new Wizard(req.body)
        newWiz.save((err, docs) => {
            if(err)
                next(err)
            res.send(docs)
        })
    })

app.route('/wizard/:id')
    .get( (req, res) => {
        Wizard.findById(req.params.id, (err, docs) => {
            if(err)
                next(err)
            res.send(docs)
        })
    })
    .put( (req, res) => {
        Wizard.findByIdAndUpdate(req.params.id, req.body, (err, docs) => {
            if(err)
                next(err)
            res.send(docs)
        })
    })
    .post( (req, res) => {
        res.send("Nuh-uh, WE pick the ids")
    })
    .delete( (req, res) => {
        Wizard.findByIdAndDelete(req.params.id, (err, docs) => {
            if(err)
                next(err)
            res.send(docs)
        })
    })


//handle errors
app.use((err, req, res, next) => {
    res.send(err)
}) 