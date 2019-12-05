import React from "react";
import ReactDOM from "react-dom";
import Friend from "./Friend.js";

function FriendList(props){
    return (
        <div>
            {props.friends.map((friend, i) => {
                return  <Friend key={friend.name + "-" + i} friend={friend}/>
            })}
        </div>
    )
}

export default FriendList