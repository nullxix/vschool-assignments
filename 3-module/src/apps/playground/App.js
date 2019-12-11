import  React, {useState, useEffect} from "react"
import Box from "./Box"
import GimmeFruit from "./GimmeFruit"

function App(props){
    const [fruit, setFruit] = useState("apple");

    const handleClick = () => {
        setFruit("orange")
    }

    useEffect(() => {
        console.log("THIS IS ONLY THE BEGINNING")
    },[])

    useEffect(() => {
        console.log("something happened")
    })

    return (
        <>
            <div> Hey there</div>
            <GimmeFruit fruit="watermelon">
                {(fruit) => {
                    return <Box handleClick = {handleClick} fruit={fruit}/>
                }}
            </GimmeFruit>
            <Box handleClick = {handleClick} value={7} fruit={fruit}/>
            <GimmeFruit>
                {(fruit) => {
                    return <Box handleClick = {handleClick} value={23} fruit={fruit}/>
                }}
            </GimmeFruit>

            <Box handleClick = {handleClick} value={2} />
        </>   
    )
}

export default App;