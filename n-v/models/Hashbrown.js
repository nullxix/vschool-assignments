const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    hash: Object,
    name: String,
})

const Hashbrown = mongoose.model('Hashbrown',schema)

module.exports = Hashbrown