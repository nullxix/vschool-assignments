import React from "react";
import ReactDOM from "react-dom";
//app components
import Card from "./Card"
//app variables and config
import spots from "./variables"
//css
import './styles.css'
function App(props){
    runApp();

    
    return(
        <div>
            <div className="header">Vacation!</div>
            {[] = spots().map((spot, i) => {
                return <Card 
                    key={`${spot.place}-${i}`} 
                    place={spot.place} 
                    price={spot.price} 
                    timeToGo={spot.timeToGo}  
                />
            })}
        </div>
        
    )
}

function runApp(){
    console.log("we are running", spots())
};

export default App;