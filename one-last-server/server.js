const express = require('express')
const app = express()
const db = require('./db.js')

app.listen(1776, () => console.log(`Server alive and KICKIN' on good ol' port 1776`))

app.use(express.json())

app.route('/')
    .get((req, res) => {res.send(db.get())})
    .post((req, res) => res.send(db.post(req.body)))

app.route('/:id')
    .get((req, res) => res.send(db.get(req.params.id)))
    .put((req, res) => res.send(db.put(req.params.id, req.body)))
    .delete((req, res) => res.send(db.delete(req.params.id)))