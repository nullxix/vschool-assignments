const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    meta: Object,
    data: Object,
})

const Wizard = mongoose.model("Wizard", schema)

module.exports = Wizard;