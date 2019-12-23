import React from "react";
import ReactDOM from "react-dom";
import FriendList from "./FriendList"
import friends from "./variables";
import "./styles.css"


function App(){
    console.log(friends)
    return <FriendList friends={friends()}/>
}

export default App