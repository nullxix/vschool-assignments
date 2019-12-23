import React from "react"
import GridDot from "./GridDot"

class Grid extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectorIndex: 11,
            gridDotCount: 64
        }
        document.body.addEventListener("keypress",this.handleKeyPress)
    }


    handleKeyPress = (event) => {
        let newIndex = this.state.selectorIndex;
        let gridHeight = 4;

        let tryNewIndex = (i) => {
            if(newIndex + i >= 0 && newIndex + i < this.state.gridDotCount){
                //new index is within bounds
                return newIndex += i;
            } else {
                if(newIndex + i >= 0){
                    //new index is above bounds
                    return newIndex = newIndex - (this.state.gridDotCount - i);
                } else {
                    //new index is below bounds

                     console.log("current:", this.state.gridDotCount, i, newIndex)
                    return newIndex = this.state.gridDotCount + (i + newIndex)
                }
            }
        }

        switch(event.key){
            case "a": //left
                    console.log(tryNewIndex(-4))
                    break;
            case "w": //up
                    console.log(tryNewIndex(-1))
                    break;
            case "d": //right
                    console.log(tryNewIndex(4))
                    break;
            case "s": //down
                    console.log(tryNewIndex(1))
                    break;
        }

        let newState = this.state;
        newState.selectorIndex = newIndex;
        this.setState(newState)
    }

    render(){

    let dotArray = Array(this.state.gridDotCount).fill(null).map((ele, i) => {
        let isSelected = this.state.selectorIndex === i ? true : false;
        let returnMe;
        // isSelected ?
        //     returnMe = <GridDot key={"grid-dot"+i} temp={(isSelected ? "XXX" : i)} selected={isSelected}/>
        //     : returnMe = <GridDotEvil key={"grid-dot"+i} temp={(isSelected ? "XXX" : i)} selected={isSelected}/>;

        let newClassName = "grid-dot";
        if(isSelected){
            newClassName = "grid-dot selected"
        }

        returnMe = <GridDot key={"grid-dot"+i} temp={(isSelected ? "XXX" : i)} selected={isSelected} className={newClassName}/>

        return returnMe
    })

        return(
            <div id="grid">
                {dotArray}
            </div>
        )
    }


}

export default Grid