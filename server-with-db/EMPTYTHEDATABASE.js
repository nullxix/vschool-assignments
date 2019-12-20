const axios = require('axios')

//calling this function is a path to the dark side
module.exports = () => {
    axios.get("http://localhost:2020/wizard")
    .then(response => order66(response.data))


    const order66 = jedi => {
        jedi.forEach(jed => {
            axios.delete(`http://localhost:2020/wizard/${jed._id}`)
        });
    }
}

