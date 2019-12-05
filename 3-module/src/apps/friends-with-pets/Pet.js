import React from "react";
import ReactDOM from "react-dom";

function Pet(props){

        return(
            <div className="pet">
                 <div>{props.pet.name}</div>
                 <div>{props.pet.breed}</div>
            </div>)
}



export default Pet