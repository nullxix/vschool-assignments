import React from 'react'


export default function NinjaCard(props){
    return(
        <div className="ninja-card">
            <div>Name: {props.data.name}</div>
            <div>Rank: {props.data.rank}</div>
            <div>Bounty: {props.data.bounty}</div>
            <div>Skills: {props.data.skills.reduce ?   //if skills is an array, add spacing and commas
                props.data.skills.reduce((acc, cv, i) => {
                    if(i < props.data.skills.length - 1) //adds comma to all except the last one
                        return acc + " " + cv + ","
                    else   
                        return acc + " " + cv
                }, "")
                :props.data.skills} {/*if skills is NOT an array, just print it */}
            </div>
            <button 
                onClick={props.deleteAction}
                className='delete-ninja'
            >
                {props.data.name.toUpperCase} IS UNWORTHY
            </button>
        </div>
    )
}