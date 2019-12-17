import React, {useState} from "react"
import "./styles.css"
import Button from "./Button"
import Header from "./Header"
import ThemeContext from "./ThemeContext"

export default function App(props){

    const [theme, setTheme] = useState("dark")

    function handleToggle(event){
        theme === "dark" ?
            setTheme("xtra-dark")
            : setTheme("dark");

    }

    return (
        <ThemeContext.Provider value={{theme: theme, toggle: handleToggle}}>
            <div id="app">
                <Header/>
                <Button/>
            </div>
        </ThemeContext.Provider>
    )
}

