const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String
})

const Yo = mongoose.model("Yo", schema)

module.exports = Yo