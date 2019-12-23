//initialize ninjas
const uuid = require('uuid/v4')

ninjas = [

]
ninjaDefault = {
    skills: ['shuriken','stealth','katana','open-palm'],
}

//ninja methods
getNinjas = () => ninjas;

newNinja = (params) => {
    ninjas.push({
        name: params.name || "John Smith",
        skills: params.skills || ninjaDefault.skills,
        rank: params.rank || 'black-belt',
        bounty: params.bounty || 0,
        _id: uuid()
    })
}

deleteNinja = (id) => {
    ninjas = ninjas.filter(ninja => {
        console.log(':' + ninja._id, "||", id)
        return (':' + ninja._id) != id
    })
}

//populate initial ninjas
newNinja({name: "Charles", bounty: 300})
newNinja({
    name: "Peggy Carter", 
    skills: (ninjaDefault.skills.concat(['hacking', 'diplomacy', 'investigation'])),
    rank: "Special Agent"
})
newNinja({bounty: 500})
newNinja({skills: "unknown", bounty: 2000})

module.exports = {
    getNinjas, newNinja, deleteNinja
}