import React from "react"
import GridDot from "./GridDot"

class Grid extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectorIndex: 7,
            gridDotCount: 64
        }

        document.body.addEventListener("keypress",this.handleKeyPress)
    }

    

    handleKeyPress = (event) => {
        console.log(event.key)
        let newIndex = this.state.selectorIndex;
        let gridHeight = 4;

        let tryNewIndex = (i) => {
            if(newIndex + i > 0 && newIndex + 1 < this.state.gridDotCount){
                //new index is within bounds
                return newIndex += i;
            } else {
                if(newIndex + i > 0){
                    //new index is above bounds
                    return newIndex = this.state.gridDotCount - (i - newIndex)
                } else {
                    //new index is below bounds
                    return newIndex = newIndex - (this.state.gridDotCount - i);
                }
            }
        }

        switch(event.key){
            case "a": //left
                    console.log("left")
                    tryNewIndex(-4)
                    break;
            case "w": //up
                    tryNewIndex(-1)
                    break;
            case "d": //right
                    tryNewIndex(4)
                    break;
            case "s": //down
                    tryNewIndex(1)
                    break;
        }

        let newState = this.state;
        newState.selectorIndex = newIndex;
        this.setState()
    }

    render(){

    let dotArray = Array(this.state.gridDotCount).fill(null).map((ele, i) => {
        let isSelected = this.state.selectorIndex === i ? true : false;
        console.log(isSelected)

        return <GridDot key={"grid-dot"+i} temp={i+1} selected={isSelected}/>
    })

        return(
            <div id="grid">
                {dotArray}
            </div>
        )
    }


}

export default Grid