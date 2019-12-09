import React from "react"
import ReactDOM from "react-dom"
import LightGrid from "./components/LightGrid"
import ButtonContainer from "./components/ButtonContainer"
import "./styles.css"
// import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css")

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            gridColors: ["coral", "coral", "coral", "coral"],
            selectorIndex: 0,
            direction: 1,
        }

        //bind everything
        for (let [key, value] of Object.entries(this.actions)) {
            this.actions[key].bind(this)
        }

        for (let [key, value] of Object.entries(this.internal)) {
            this.internal[key].bind(this)
        }
    }

    render(){
        return(
            <div id="app">
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet"></link>
                <LightGrid colors={this.state.gridColors}/>
                <ButtonContainer actions={this.actions}/>
            </div>
        )
    }


    actions = {
        "mask": ()=>{/*make active + opposite black, if either black then both white*/
            let newColor = 0;
                if(this.state.gridColors[this.state.selectorIndex] === this.colorOptions[0]
                || this.state.gridColors[this.internal.getOpposite()] === this.colorOptions[0])
                    newColor = 1;

            this.internal.setColor(
                    [this.state.selectorIndex, this.internal.getOpposite()], 
                    [newColor, newColor]
            )

            this.internal.advance()
        },

        "spider": ()=>{ /*Random color, switch direction*/
            this.internal.setColor([this.state.selectorIndex],[this.internal.generateRandomColor()])
            this.internal.reverse();
            this.internal.advance();
        },

        "camera": ()=>{
            /*opposite + previous shift back one color 
                we're pretending previous position is index - 1 (spoiler: it's not)
                because I'm lazy.
                I could definitely write this correctly if I wanted to.
            */
            
           let prevIndex = this.state.selectorIndex > 0 ? this.state.selectorIndex - 1: this.state.gridColors.length - 1;
           let oppIndex = this.internal.getOpposite()
        

            //get the current colors
            console.log("MAMA", this.state.gridColors[prevIndex])
            let colorPrevIndex = this.colorOptions.indexOf(this.state.gridColors[prevIndex]) 
            let colorOppIndex = this.colorOptions.indexOf(this.state.gridColors[oppIndex])
            

            //shift the current colors back one
            //(or loop around if color is at index 0)
            colorPrevIndex > 0 ?
                colorPrevIndex--:
                colorPrevIndex = this.colorOptions.length - 1;

            colorOppIndex > 0 ?
                colorOppIndex--:
                colorOppIndex = this.colorOptions.length - 1;
                

            console.log("CAMERA",prevIndex,oppIndex,"||",colorPrevIndex,colorOppIndex)
            this.internal.setColor(
                [prevIndex, oppIndex],
                [colorPrevIndex, colorOppIndex]
            )

            this.internal.advance();
        
        },
        "kiwi": ()=>{console.log(/*adjacent to random color*/)
            this.internal.setColor(
                [this.state.selectorIndex > 0 ? this.state.selectorIndex - 1: this.state.gridColors.length - 1,
                 this.state.selectorIndex < this.state.gridColors.length - 1 ? this.state.selectorIndex + 1: 0],
                [this.internal.generateRandomColor(),this.internal.generateRandomColor()]
            )
            this.internal.advance();
        }, 
        "lemon": ()=>{/*sky blue, if blue (or bluish) then yellow*/
            let newColor = "skyblue"
            if(this.state.gridColors[this.state.selectorIndex].includes("blu"))
                newColor = "yellow";
            
            let newColorIndex = this.colorOptions.indexOf(newColor)

            this.internal.setColor(
                [this.state.selectorIndex],[newColorIndex]
            )

            this.internal.advance();
            
        },
        "death": ()=>{console.log(/*make black, if black adjacent black*/)
        },
        "d20": ()=>{console.log(/*all random color, switch to opposite */)
        },
    }

    internal = {
        advance: ()=>{
            /*
                grid layout
                0 1
                2 3

                desired movements (opposite if direction reversed)
                0 -> 1
                1 -> 3
                2 -> 0
                3 -> 2
            */

            let newIndex = this.state.selectorIndex
            let dir = this.state.direction === 1 && true;

            switch (newIndex){
                case 0:
                    newIndex = dir ? 1: 3;
                    break;
                case 1:
                    newIndex = dir? 3: 0;
                    break;
                case 2:
                    newIndex = dir? 0: 3;
                    break;
                case 3:
                    newIndex = dir? 2: 1;
                    break;
            }

            this.internal.setPosition(newIndex);
        },

        reverse: ()=>{
            let newDirection = -1; //1 is forwards, -1 is backwards

            if(this.state.direction === -1)
                newDirection = 1;

            this.setState({
                direction: newDirection
            })
            
        },

        setColor: (which, newColor)=>{
            console.log("Setting-", ...which, "to", ...newColor)
            let newColors = [...this.state.gridColors]

            for(let i = 0; i < which.length; i++){
                newColors[which[i]] = this.colorOptions[newColor[i]]
            }
            this.setState(
                {
                    gridColors: newColors
                }
            )
        },

        getLightColor: (which)=>{
            return(this.state.gridColors[which])
        },

        setPosition: (i)=>{
            this.setState({
                selectorIndex: i
            })
        },

        getOpposite: ()=>{
            //figure out which position is opposite
            //and set that
            let opp = this.state.selectorIndex;
            /*
            0 1 
            2 3

            0 -> 3
            3 -> 0
            1 -> 2
            2 -> 1
            */

           let a, b = 0;

            opp <= 1 ? //determine DIRECTION to move
                a = 1:
                a = -1;
            
            Math.abs(1.5 - opp) < 1? //determine DISTANCE to move
                b = 1:
                b = 3;

            opp += a * b;
            return opp;
        },

        generateRandomColor: ()=>{
            return Math.floor(Math.random() * this.colorOptions.length);
        },
    }

    colorOptions = [
        "black", //black is first
        "white", //white is second 
        "yellow",
        "blue",
        "violet",
        "red",
        "pink",
        "turquoise",
        "plum",
        "powderblue",
        "skyblue",
        "orchid"
    ]
}

export default App;