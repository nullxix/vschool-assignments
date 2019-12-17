import React from "react"
import {BrowserRouter as Router, Link, Switch, Route, useRouteMatch} from "react-router-dom"
import Left from "./Left"
import Right from "./Right"

export default function App(props){

    return(
        <Router>
            <nav> 
                <Link to="/left/1">{" --< 1 <-- "}</Link>
                <Link to="/right/1">{"--> 1 >--"}</Link>
                <Link to="/left/3">{"--< 3 <--"}</Link>
                <Link to="/right/3">{"--> 3 >--"}</Link>
            </nav>
                <Switch>
                    <Route path="/left/:count">
                        <Left/>
                    </Route>
                    <Route path="/right/:count">
                        <Right/>
                    </Route>
                </Switch>
        </Router>
    )
}