import React from "react"

class TextTop extends React.Component{
    constructor(props){
        super(props)

    }

    render(props){
        return(
            <input name="topText" type="text" onChange={this.props.onChange}/>
        )
    }
}

export default TextTop;