const axios = require('axios')

//calling this function is a path to the dark side
cons dbAdress = 7777;

axios.get(`http://localhost:${dbAdress}`)
    .then(response => order66(response.data))


const order66 = jedi => {
    jedi.forEach(jed => {
        axios.delete(`http://localhost:${dbAdress}/${jed._id}`)
    });
}


