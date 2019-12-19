//declare stuff
const express = require('express')
const app = express();
const database = require('./database.js')

//initialize stuff
app.use(express.json())

app.listen(1337, () => {
    console.log('Ice-cream is served on port 1337')
})

//route stuff
app.route('/')
    .get((req, res, next) => {
        res.status = 200;
        res.send("Hlo Wrld")
    })

app.route('/:bowl')
    .get((req, res, next) => {
        dbRes = database.getBowl(req.params.bowl)
        if(dbRes.err){
            console.log(dbRes.err)
            res.status = dbRes.err.status
            res.send(dbRes.err.msg)
        } else {
            res.send(dbRes)
        } 
    })
    .post((req, res, next) => {
        dbRes = database.newBowl(req.params.bowl, req.body)
        if(dbRes.err){
            console.log(dbRes.err)
            res.status = dbRes.err.status
            res.send(dbRes.err.msg)
        } else {
            console.log(dbRes)
            res.send(dbRes)
        }   
    })
    .delete((req, res, next) => {
        dbRes = database.deleteBowl(req.params.bowl)
        if(dbRes.err){
            console.log(dbRes.err)
            res.status = dbRes.err.status
            res.send(dbRes.err.msg)
        } else {
            console.log(dbRes)
            res.send(dbRes)
        } 
    })
    .put((req, res, next) => {
        dbRes = database.updateBowl(req.params.bowl, req.body)
        if(dbRes.err){
            console.log(dbRes.err)
            res.status = dbRes.err.status
            res.send(dbRes.err.msg)
        } else {
            console.log(dbRes)
            res.send(dbRes)
        } 
    })