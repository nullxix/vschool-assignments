import React from "react"
import {useParams} from "react-router-dom"

export default function Right(props){
    let {count} = useParams();
    let num = parseInt(count);
    console.log(">", count, typeof count)
    return (
        Array(num).fill().map((ele, i) => <div key={i}> I'M A RIGHTY {count} </div>)
    )
}