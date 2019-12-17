const express = require('express')
const app = express()
const path = require('path');
const uuid = require('uuid')
let port = 3001

const bounties = [
    {
        name: 'charlie',
        price: 475,
        _id: uuid(),
        intel: {
            location: 'alderaan'
        }
    },
    {
        name: 'unknown',
        price: 999999,
        _id: uuid(),
        intel: {
        }
    },
    {
        name: 'kilroy jenkins',
        price: 1337,
        _id: uuid(),
        intel: {
            other: "loves lemonade and apple cobbler"
        }
    }
]


app.listen(port, () => {
    console.log("Server running on port", port)
})

app.get('/', (req, res) => {
    req.send('nothing to see here')
})

app.get('/bobba', (req, res) => {
    res.sendFile(path.join(__dirname + "/bobba.html"));
})

app.use(express.json())
app.route('/bounties')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        addBounty(req.body.name, req.body.price, req.body.intel)
        console.log(req.body)
        res.send("Bounty submitted")
    })
    .put((req, res) => {
        if(updateBounty(req.body._id, req.body))
            res.send("Bounty updated")
        else res.send("Update failed")
    })
    .delete((req, res) => {
        deleteBounty(req.body._id)
        res.send("Hey delete \n")
    })

    function updateBounty(id, bounty)
    {
        bountyId = bounties.findIndex((pred) => {
            if(pred._id === id)
                return true
            else return false;
        })

        if(bountyId >= 0){
            newBounty = {...bounties[bountyId], ...bounty}
            newBounty.intel = {...bounties[bountyId].intel, ...bounty.intel}
            bounties[bountyId] = newBounty;
            return true
        } else {
            return false
        }
    }
    function addBounty(name, price, intel = 'none') {
        let _id = uuid();
        bounties.push(
            { name, price, intel, _id}
        )
    }

    function deleteBounty(id){
        bountyId = bounties.findIndex((pred) => {
            if(pred._id === id)
                return true
            else return false;
        })

        bounties.splice(bountyId, 1)
    }