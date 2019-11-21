var header = document.getElementById("header")
var sendButton = document.querySelector("#form button")
var clearButton = document.querySelector("#clear-button")
var themeDropDown = document.getElementById("theme-drop-down")
var messagesContainer = document.querySelector(".messages")
var messageInput = document.getElementById("input")
var messageForm = document.getElementById("form")

var formAlignment = "left";
var convo = [
    "ok boomer",
    "Lorem",
    "You seen that movie?",
    "i ain\'t no LIBTARD!",
    "how virulent",
    "That's how I met your mother",
    "My therapist said that too",
    "Do you think?",
    "I love it",
    "...",
    "Do you mind?",
    "Thank-you",
    "I think so too",
    "An important mission",
    "Nah, I'm not really into Pokemon",
    "A girl swam across the river, she found a dragonfly",
    "Three gold pieces were stolen",
    "The theater has a unique showing tonight",
    "Do that",
    "\"Go,\" said the frog",
    "Do what you must",
    "So it has come to this",
    "Is this really what you want?",
    "Hello there",
    "I have the high ground",
    "Logical fallacy!",
    "It's been an exciting harvest this year",
    "There is much danger on this path you follow",
    "I have SOOOO many questions",
    "Hot air balloons; they sink, unless they fall",
    "Fathom the sparrow, he walks alonside my thumb",
    "I was sharpening my knife",
    "Inconceivable!",
    "Knock Knock",
    "Do you like my hat?",
    "I agree",
    "I disagree",
    "Yes",
    "No",
    "Absolutely not",
    "Really?",
]

function doNothing(){    
    console.log("it\'s beautiful the way it is")
}
doNothing();

sendButton.addEventListener("click",function(e){
    //stop form from refreshing page
    e.preventDefault();
    sendMessage(e)
    toggleFormAlignment();
    messageInput.value = nextInConvo();
})
clearButton.addEventListener("click", erase);

function sendMessage(e){
    //e is document element
    messagesContainer.innerHTML += newMessage()
}

function toggleFormAlignment(){
    if(formAlignment === "left"){
        //messageForm.removeAttribute("left")
        //messageForm.setAttribute("class", "right");
        formAlignment = "right"
    } else {
        //messageForm.removeAttribute("right")
        //messageForm.setAttribute("class", "left");
        formAlignment = "left";
    }
}

function erase(){
    messagesContainer.innerHTML = "";
}

function newMessage(){
    var returnMe = "<div class=\"message " + formAlignment + "\"> " + messageInput.value + " </div>";
    return returnMe;
}

function nextInConvo(){
    var rand = 0;
    if(convo.length){
        rand = Math.floor(Math.random()*convo.length)
        return convo.splice(rand,1);
    } else {
        return "That\'s all, folks!"
    }
}