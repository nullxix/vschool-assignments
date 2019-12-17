import React from "react"
import ThemeContext from "./ThemeContext"

export default function Button(props){
    return (
        <ThemeContext.Consumer>
            {({theme, toggle}) => {
                return (<button className={"button " + theme + "-theme"}
                    onClick={toggle}
                >
                    GRAAAAAAA
                </button>)
            }}
        </ThemeContext.Consumer>
        
    )
}