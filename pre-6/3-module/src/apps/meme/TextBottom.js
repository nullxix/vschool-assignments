import React from "react"

class TextBottom extends React.Component{
    constructor(props){
        super(props)

    }

    render(props){
        return(
            <input name="bottomText" type="text" onChange={this.props.onChange}/>
        )
    }
}

export default TextBottom;