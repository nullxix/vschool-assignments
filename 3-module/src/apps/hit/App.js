import React from "react";
import HitCard from "./HitCard";
import "./styles.css";

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true,
            hitList: [],
        }
    }
    
    componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    hitList: response,
                    loading: false,
                })
            })
    }

    render(props) {
            let hitData = <div> "Loading . . . " </div>
            if(!this.state.loading){
                console.log(this.state.hitList)
                hitData = this.state.hitList.map(hit => {
                    return <HitCard name={hit.name} image={hit.image}/>
                })
            }

        return (
            <div id="app">
                {hitData}
            </div>
        )
    }
}

export default App;