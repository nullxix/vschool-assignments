import React from "react";

class HitCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(props){
        return (
            <div className="hit-card">
                <img src={this.props.image}></img>
                <div class="card-label">{this.props.name}</div>
            </div>
        )
    }
}

export default HitCard;