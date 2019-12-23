import React from "react"

class GridDot extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected: this.props.selected,
        }

    }

    render(){
        //add 'selected' class if this element is selected
        //className = this.state.selected ? "grid-dot selected": "grid-dot";
        //className={className}

        return(
            <div className={this.props.className}> {this.props.temp ? this.props.temp : "0" }</div>
        )
    }

    
}

export default GridDot