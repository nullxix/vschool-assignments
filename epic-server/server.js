const express = require('express')
const app = express()
const Yo = require('./models/Yo.js')
const mongoose = require('mongoose')

//set up server
app.use(express.json())

//set up db
    mongoose.connect("mongodb://localhost:27017/pineapplebliss", {useNewUrlParser: true})
        .then(() => console.log("Mongoose honkin'"))
        .catch(err => console.log(err))

//routing
app.route('/:id')
    .get((req, res, next) => {
        Yo.findById(req.params.id, (err, docs) => {
            if(err)
                next(err)
            res.status(200).send(docs)
        })
    })
    .post((req, res, next) => {
        res.send("WE pick the ids")
    })
    .put((req, res, next) => {
        Yo.findByIdAndUpdate(req.params.id, (err, docs) => {
            if(err)
                next(err)
            res.status(200).send(docs)
        })
    })
    .delete((req, res, next) => {
        Yo.findByIdAndDelete(req.params.id, (err, docs) => {
            if(err)
                next(err)
            res.status(200).send(docs)
        })
    })

app.route('/')
    .get((req, res, next) => {
        Yo.find({}, (err, docs) => {
            if(err)
                next(err)
            res.status(200).send(docs)
        })
    })
    .post((req, res, next) => {
        const new_yo = new Yo(req.body)
        new_yo.save((err, docs) => {
            if(err)
                next(err)
            res.status(200).send(docs)
        })
    })



//errors
app.use((err, req, res, next) => {
    res.send(err)
})

//light it up
app.listen(7777, () => console.log('port running on server 7777'))

