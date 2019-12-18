import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NinjaCard from './components/NinjaCard'
import NinjaController from './components/NinjaController'

export default function App(props){
    const [ninjas, setNinjas] = useState(["Loading Ninjas . . ."])

    useEffect(() => {
        loadNinjas()
    }, [])

    const submitNinjas = data => {
        axios.post('/ninjas', data)
            .then(
                loadNinjas()
            )
    }

    // grab data from remote database,
    // then populate 'ninjas' area 
    // with <NinjaCard/> templates
    const loadNinjas = () => {
        axios.get('/ninjas') //templates are intialized with remote data
            .then(res => {
                    setNinjas(res.data.map((datum => {
                         return (
                            <NinjaCard 
                                key={datum._id}
                                deleteAction={() => {deleteNinja(datum._id)}}
                                data={datum}
                            />
                         )
                    })))
                }
            )
            .catch(err => console.log(err))
    }

    const deleteNinja = (id) => {
        axios.delete('/ninjas:' + id)
            .then(res => {
                loadNinjas()
            })
    }

    return(
        <>
        <NinjaController 
            submitAction={submitNinjas /*event.preventDefault is called within NinjaController */
        }/>

        {ninjas}  {/*'ninjas' shows a loading status, 
                    once loadNinjas() finishes it's async stuff,
                    this oximoronically shows real ninjas */}
        </>
    )
}