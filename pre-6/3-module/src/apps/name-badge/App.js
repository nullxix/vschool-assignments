import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
        }

        ;(this.handleSubmit = (event) => {
            event.preventDefault();
            
            let newState = {};

            for(let i = 0; i < event.target.length; i++){
                newState[event.target[i].name] = event.target[i].value
            }

            this.setState(newState)
        }).bind(this)

    }

    render(props){

        return (
            <div id="app">
                <form name="form" onSubmit={this.handleSubmit}>
                    <input type="text" name="fName"  placeholder="first name"></input>
                    <input type="text" name="lName"  placeholder="last name"></input>
                    <input type="text" name="email"  placeholder="email"></input>
                    <input type="text" name="birthplace"  placeholder="birthplace"></input>
                    <input type="text" name="phone"  placeholder="phone number"></input>
                    <input type="text" name="food"  placeholder="favorite food"></input>
                    <textarea name="about"></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
                <div id="badge">
                    <div id="fName"> {this.state.fName || "-"}  </div>
                    <div id="lName"> {this.state.lName || "-"} </div>
                    <div id="email"> {this.state.email || "-"} </div>
                    <div id="birthplace"> {this.state.birthplace || "-"} </div>
                    <div id="phone"> {this.state.phone || "-"}</div>
                    <div id="food"> {this.state.food || "-"} </div>
                    <div id="about"> {this.state.about || "-"} </div>
                </div>
            </div>
        )
    }
}

export default App;