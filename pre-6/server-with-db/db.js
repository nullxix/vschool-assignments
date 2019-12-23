const mongoose = require('mongoose')
const Wizard = require('./models/wizard.js')

module.exports = {
    save: (data) => {
        const newWiz = new Wizard(data)
        newWiz.save((err, new_wiz) => {
            console.log(new_wiz)
        })
        return "saaaaaved"
    },
    getAll: async () => {
        let returnMe = "Crazy error. Good luck."
        await Wizard.find({}, (err, docs) => {
            returnMe = docs
            if(err)
                returnMe = err
        })
        return returnMe;
    }
}