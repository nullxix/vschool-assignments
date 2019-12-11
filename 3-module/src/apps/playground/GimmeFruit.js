import React from "react"

function GimmeFruit(props){

    return(
        props.children(props.fruit)
    )
}

GimmeFruit.defaultProps = {
    fruit: "pineapple",
}

export default GimmeFruit;