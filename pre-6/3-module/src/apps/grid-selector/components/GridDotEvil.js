import React from "react"

class GridDotEvil extends React.Component{
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
        let className = this.state.selected ? "grid-dot grid-dot-evil": "grid-dot grid-dot-evil";
        return(
            <div className={className}> {this.props.temp ? this.props.temp : "0" }
            </div>
        )
    }
}

export default GridDotEvil