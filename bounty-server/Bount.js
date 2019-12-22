const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    bounty: {
        type: Number,
        required: true
    },
    captured: Boolean,
    deadOrAlive: {
        type: String,
        enum: ['dead','alive','either']
    },
    lastKnownLocation: String,
    other: Object
})
const Bount = mongoose.model("Bount", schema)
module.exports = Bount