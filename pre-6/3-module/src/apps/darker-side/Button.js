import React from "react"
import UltimateContext from "./UltimateTheme"

export default function Button(props){
    return (
        <UltimateContext.Consumer>
            {({text, toggle}) => {
                console.log(text)
                return (
                    <button onClick={toggle}> {text} </button>
                )
            }}
        </UltimateContext.Consumer>
    )
}