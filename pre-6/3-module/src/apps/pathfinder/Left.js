import React from "react"
import {useParams, useRouteMatch} from "react-router-dom"

export default function Left(props){

    const match = useRouteMatch()
    console.log(match)


    let {count} = useParams();
    let num = parseInt(count);
    console.log(">", count, typeof count)
    return (
        Array(num).fill().map((ele, i) => <div key={i}> I'M A LEFTY {count}</div>)
    )
}

