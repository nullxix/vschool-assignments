import React from "react"
import ThemeContext from "./ThemeContext"

export default function Header(props){
    return( 
        <ThemeContext.Consumer>
            { ({theme}) =>{
                return (
                    <div className={theme + "-theme"}>
                        WELCOME TO THE {theme.toUpperCase()} SIDE
                    </div>
                )
            }}
            
        </ThemeContext.Consumer>
    )
}