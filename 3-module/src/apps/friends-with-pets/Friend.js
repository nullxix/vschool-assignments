import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

function Friend(props){
    return ( 
        <div className="friend-box">   
            <div>Name:</div><div>{props.friend.name}</div>
            <div>Age:</div><div>{props.friend.age}</div>
            
            <div className="pets-container">
                {props.friend.pets.map((pet, i) =>{
                    return <Pet key={pet.name + "-" + i} pet={pet}/>
                })}
            </div>

        </div>
            )
      
    }

export default Friend