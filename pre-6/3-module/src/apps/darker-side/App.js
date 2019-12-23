import React, {useState} from "react"
import UltimateContext, {values} from "./UltimateTheme"
import Cube from "./Cube"

export default function App(){
    return (
        <UltimateContext>
            <Cube/>
        </UltimateContext>
    )
}