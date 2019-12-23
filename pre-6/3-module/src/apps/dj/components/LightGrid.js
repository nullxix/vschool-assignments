import React from "react"
import Light from "./Light"

class LightGrid extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.colors)
        return(
            <div id="light-grid">   
                {this.props.colors.map((color, i) => {
                    return <Light key={`${color}-${i}`} color={color}/>           
                })}
            </div>
        )
    }
}

export default LightGrid