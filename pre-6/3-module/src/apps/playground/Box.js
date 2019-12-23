import React from "react";
import BigContext from "./BigContext"

function Box(props){

    return (
        <BigContext.Consumer>
          {(value) => {
            return (
              <div> {value} </div>
            )
          }}
        </BigContext.Consumer>
    )
}

export default Box;