const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Bount = require('./Bount.js')

mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log("mongoose honkin"))
app.use(express.json())

//routing
app.route('/')

app.route('/bounty-board/:id')
    .get((req, res, next) => {
        Bount.findById(req.params.id, (err, docs) => {
            if(err)
                next(err)
            res.status(200).send(docs)
        })
    })
    .put((req, res, next) => {
        Bount.findByIdAndUpdate(req.params.id, req.body, (err, docs) => {
            if(err)
                next(err)
            res.status(200).send(docs)
        })
    })
    .post((req, res, next) => {
        res.send("We can choose our own ids, thank-you very much")
    })
    .delete((req, res, next) => {
        Bount.findByIdAndDelete(req.params.id, (err, docs) => {
            if(err)
                next(err)
            res.status(200).send(docs)
        })
    })

app.route('/bounty-board')
    .get((req, res, next) => {
        Bount.find({}, (err, docs) => {
            if(err)
                next(err)
            res.status(200).send(docs)
        })
    })
    .post((req, res, next) => {
        let bount = new Bount(req.body)
        bount.save((err, docs) => {
            if(err)
                next(err)
            res.status(200).send(docs)
        })
    })

//errorz
app.use((err, req, res, next) => {
    res.send(err)
})

//light it up
app.listen(8008, () => console.log('8008 it is 8008'))
