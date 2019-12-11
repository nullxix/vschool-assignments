import React from "react";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: "Keanu",
            pastNames: [],
            role: "Nobody"
        };

        ;(this.handleChange = (event) => {
            this.setState({[event.target.name]: event.target.value})
            console.log("------------END MISSION---------")
        }).bind(this)

        ;(this.handleSubmit = (event) => {
            console.log("------------BEGIN MISSION---------")
            event.preventDefault();
            this.setChange();
        }).bind(this)

        ;(this.setChange = () => {
            let newNames = this.state.pastNames;
            newNames[newNames.length] = this.state.user + " the " + (this.state.role ? this.state.role: "Nobody");
            this.setState({
                pastNames: newNames
            })
        }).bind(this);


    }

    render(){
        return (
            <div id="app">
                <div id="user-output">{(this.state.user ? this.state.user: "Nobody")}{this.state.role ? " the " + this.state.role: " the Nobody"}</div>
                <form name="bestForm" onSubmit={this.handleSubmit}>
                    <input name="user" type="text" onChange={this.handleChange}></input>
                    <select name="role" onChange={this.handleChange}>
                        <option value="Aggressor">Aggressor</option>
                        <option value="Mediator">Mediator</option>
                        <option value="Survivor">Survivor</option>
                        <option value="Hostage">Hostage</option>
                        <option value="Defender">Defender</option>
                        <option value="Bystander">Bystander</option>
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
                <div id="past-names">
                    {this.state.pastNames.map((name, i) => {
                        return (
                            <div>{name}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;