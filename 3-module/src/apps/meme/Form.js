import React from "react";
import TextTop from "./TextTop"
import TextBottom from "./TextBottom"
import Submit from "./Submit"

class Form extends React.Component{
    constructor(props){
        super(props)
    }

    render(props){
        return (
            <form className="form" onSubmit={this.props.handleSubmit}>
                <TextTop onChange={this.props.onChange}/>
                <TextBottom onChange={this.props.onChange}/>
                <Submit/>
            </form>
        )
    }
}

export default Form;