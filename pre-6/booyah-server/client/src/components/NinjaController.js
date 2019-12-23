import React from 'react'

export default function NinjaController(props){
    const submitForm = (event) => {
        event.preventDefault()
        let data = event.target.ninjaInput.value
        // eslint-disable-next-line
        if(data.charAt(0) != "{")
            data = '{' + data + '}'
            console.log(data)
            console.log('^^^^^^^^^')
        data = JSON.parse(data)
        console.log(data)
        props.submitAction(data)
    } 
    
    return (
        <div id="ninja-controller">
            <form onSubmit={submitForm}>
                <input name="ninjaInput" type="text"></input>
                <button type='submit'>Build That Ninja!</button>
            </form>
        </div>
    )
}