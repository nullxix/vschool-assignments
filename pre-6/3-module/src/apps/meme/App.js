import React from "react"
import Img from "./Img"
import Form from "./Form"
import "./styles.css"

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            topText: "Hello",
            bottomText: "There",
            allImages: [],
            randomImage: "https://i.imgflip.com/1ihzfe.jpg",
        }

        ;(this.handleSubmit = (event) => {
            event.preventDefault();
            console.log("Submitted!")
            this.setState({
                randomImage: this.getRandomImage(),
            })
        }).bind(this)

        ;(this.getRandomImage = () => {
            let i = Math.floor(Math.random()*this.state.allImages.length);
            return this.state.allImages[i];
        }).bind(this)

        ;(this.handleChange = (event) => {
            this.setState({ 
                [event.target.name]: event.target.value,
            })
        }).bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(result => result.json())
            .then(result => {
                let allImages = result.data.memes.map( meme => {
                        return meme.url;
                })
                this.setState({allImages})
            })
    }

    render(props){
        //https://api.imgflip.com/get_memes
        return(
            <div id='app'>
                <Form handleSubmit={this.handleSubmit} onChange={this.handleChange}/> 
                <Img image={this.state.randomImage} topText={this.state.topText} bottomText={this.state.bottomText}/>
            </div>
        )
    }
}

export default App;