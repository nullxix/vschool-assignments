import React from "react"

class Light extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.color)
        return(
            <div className="light" style={{background: this.props.color}}></div>
        )
    }
}

export default Light