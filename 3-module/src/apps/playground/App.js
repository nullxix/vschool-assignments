import React from "react"
import BigContext from "./BigContext"
import Box from "./Box"

export default function App(props){

    return (
        <BigContext.Provider value={{color: "blue", species: "monkey"}} >
            <Box/>
        </BigContext.Provider>
    )
}