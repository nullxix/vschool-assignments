import React from "react"

class Img extends React.Component{
    constructor(props){
        super(props)

    }

    render(props){
        return(
            <div className="meme">
                <img src={this.props.image} alt=""/>
                <h2 className="top"> {this.props.topText} </h2>
                <h2 className="bottom"> {this.props.bottomText} </h2>
            </div>
        )
    }
}

export default Img;