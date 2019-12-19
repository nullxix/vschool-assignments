const uuid = require('uuid/v1')
let items = [];

module.exports = {
    post: (data) => {
        return newItem(data)
        
    },
    put: (id, data) => {
        let returnMe = `Item ${id} not found`
        for(let i = 0; i < items.length; i++){
            if(items[i]._id === id){
                items[i].data = data
                returnMe = items[i]
                break;
            }
        } 
        return returnMe; 
    },
    delete: (id, data) => {
        let returnMe = `item ${id} not found`
        items = items.filter(item => {
            if(item._id = id){
                returnMe = `deleted ${item._id}`
            }
           return item._id != id
        })
        return returnMe
    },
    get: (id = false) => {
        if(id){
            let returnMe = `${id} not here, friend`
            for(let i = 0; i < items.length; i++)
                if(items[i]._id === id){
                    returnMe = items[i]
                    break;
                } 
            return returnMe;
        } else {
            return items;
        }
    }
}

const newItem = (data) => {
    newId = uuid()
    items.push({_id: newId,data})
    return newId;
}