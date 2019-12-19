module.exports = {
    getBowl: (id) => {
        return findBowl(id)
    },

    newBowl: (id, data) => {
        let _newBowl = createBowl(id, data)
        if(_newBowl.err)
            return _newBowl
        return {
            msg: "bowl created successfully",
            bowl: _newBowl
        }
    },

    updateBowl: (id, data) => {
        bowlToUpdate = findBowl(id)
        if(bowlToUpdate.err)
            return bowlToUpdate;
        
        upRes = smartUpdate(bowlToUpdate, data)
        bowls[bowlToUpdate._dbIndex] = upRes; // this feels wrong, but okay

        if(upRes.err)
            return upRes;
        else 
            return {msg: '${id} succesfully updated', bowl: upRes}

    },

    deleteBowl: (id) => {
        return {
            message: `${id} deleted`
        }
    }
}

const bowls = [];

const dbError = (msg, status) => {
    return {
        err: {msg, status}
    }
}

const createBowl = (name, data) => {
    return(bowls[bowls.push({...data, _id: name}) - 1])   
}

const findBowl = (id) => {
    let returnMe = dbError('${id} does not exist', 404)
    for(let i = 0; i < bowls.length; i++){
        if (bowls[i]._id === id){
            bowls[i]._dbIndex = i
            returnMe = bowls[i]
            break;
        }
    }
    return returnMe;
}

//this merges two objects, preserving (almost) ALL data
//the almost: in case of a conflict, 'data' overrides 'obj'
    //returns the updated obj
const smartUpdate = (obj, data, n = 100) => {
    n--; //n is used to prevent excessive looping
    if(n <= 0)
        return dbError("Either there's a loop in the data, or it's nested REALLY deep", 508)

    for (let [key, value] of Object.entries(data)){
            if(typeof obj[key] === "object"){ 
                console.log(obj[key])
                if(Array.isArray(obj[key])){
                    value.forEach( ele => {
                        if(!obj[key].includes(ele))
                            obj[key].push(ele)
                    })
                } else {
                    smartUpdate(obj[key], value, n) //notice how 'n' is passed down
                }
            } else {
                obj[key] = value;
            }
        }
    return obj
}