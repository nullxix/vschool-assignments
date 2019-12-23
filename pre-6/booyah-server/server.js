const express = require('express')
const app = express()
const fakeDb = require('./fakeDb.js')
let port = 3001;

app.use(express.json())

//start server
app.listen(port, ()=>{
    console.log('server running on port', port)
})

//routing
app.get('/', (req, res, next) => {
    res.send("nothing to see here")
})
   
app.route('/ninjas:id')
    .delete((req, res) => {
        console.log(req.params)
        console.log('[][][][][]')
        fakeDb.deleteNinja(req.params.id)
        res.send(`ninja ${req.params.id} deleted`)
    })

app.route('/ninjas')
    .get((req, res, next) => {
    res.send(fakeDb.getNinjas())
})
    .post((req, res) => {
        console.log('New Ninja!')
        console.log(req.body)
        fakeDb.newNinja(req.body)
    })
    .put((req, res) => {

    })

//erros

app.use((err, req, res, next) => {
    
})
