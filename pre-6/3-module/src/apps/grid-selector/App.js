import React from "react"
import ReactDOM from "react-dom"
import Grid from "./components/Grid"
import "./grid-styles.css"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Grid/>
            </div>
        )
    }
}

export default App;