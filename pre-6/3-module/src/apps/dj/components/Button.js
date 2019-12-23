import React from "react"

class Button extends React.Component{
    constructor(props){
        super(props)
        this.functionName = props.functionName;
        this.handleOnClick = props.actions[props.functionName]
    }

    render(){
        let iconName = " "; //THE SPACE IS IMPORTANT
        switch(this.functionName){
            
            case "kiwi":
                iconName += "fas fa-kiwi-bird"
                break;
            case "lemon":
                iconName += "far fa-lemon"
                break;
            case "ghost":
                iconName += "fas fa-ghost"
                break;
            case "spider":
                iconName += "fas fa-spider"
                break;
            case "mask":
                iconName += "fas fa-mask"
                break;
            case "camera":
                iconName += "fas fa-camera-retro"     
                break;
            case "d20":
                iconName += "fas fa-dice-d20"
                break;
            //default
            default:
                iconName += "fas fa-book-dead";
                break;
        }
        return(
            <button className="button" onClick={this.handleOnClick}>
                <i className={iconName}></i>
            </button>
        )
    }
}

export default Button