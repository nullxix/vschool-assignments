import React from "react"
import Button from "./Button"

class ButtonContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="button-container">
                <Button functionName="mask" actions={this.props.actions}/>
                <Button functionName="spider" actions={this.props.actions}/>
                <Button functionName="camera" actions={this.props.actions}/>
                <Button functionName="kiwi" actions={this.props.actions}/>
                <Button functionName="lemon" actions={this.props.actions}/>
                <Button functionName="death" actions={this.props.actions}/>
                <Button functionName="d20" actions={this.props.actions}/>
            </div>
        )
    }
}

export default ButtonContainer