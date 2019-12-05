import React from "react"

class GridDot extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected: this.props.selected
        }
        //select function is currently unused
        this.select = (function(){
            let newState = this.state;
            newState.selected = true;
            this.setState(newState)   
        }).bind(this)
    }

    render(){
        //add 'selected' class if this element is selected
        let className = this.state.selected ? "grid-dot selected": "grid-dot";
        return(
            <div className={className}> {this.props.temp ? this.props.temp : "0" }</div>
        )
    }

    
}

export default GridDot