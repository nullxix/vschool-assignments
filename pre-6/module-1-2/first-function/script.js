

function sum(a, b)
{
    console.log(a+b)
}

function subtract(a, b)
{
    console.log(a-b)
}

function speak(word = "General Kenobi!")
{
    console.log(word)
}


const joe = {
    name: "Joe",
    speak: function(word = "I am joe"){
        console.log(word)
    }
}

speak("Hello there.")
speak()