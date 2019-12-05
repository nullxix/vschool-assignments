import React from "react"
import ReactDOM from "react-dom"

function Card(props){

    // return <div> Hey </div>
    return(
        <div className="card">
                <div>Place: </div> <div> {props.place} </div>
                <div>Price: </div> <div> {props.price} </div>
                <div>Best Season: </div> <div> {props.timeToGo} </div>
        </div>
    )
}

export default Card