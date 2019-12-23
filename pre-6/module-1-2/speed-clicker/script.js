const button = document.getElementById("button")
const timeDisplay = document.getElementById("timer")
const recordDisplay = document.getElementById("record")
let intervalId;
let isPlaying = false;
let clickable = true;
let clicks = 0;
let time = 0;

if(localStorage.record && localStorage.record > 0){
    clicks = 0;
    displayHighScore();
}

button.addEventListener("click", click);

function click(){
    if(clickable){
        if(!isPlaying){
            isPlaying = true;
            beginTimer();
        }
        
        clicks++;
        recordDisplay.innerText = clicks;  
    }
}

function beginTimer(){
    time = 1000;
    displayTime();
    intervalId = setInterval(advanceTimer, 10);
}

function displayTime(){
    timeDisplay.innerText = createClockText(time);
}

function advanceTimer(){
    console.log(time + "d");
    time--;
    displayTime();
    if(time <= 0){
      clearInterval(intervalId);
        endGame();
    }
}

function createClockText(int){
    let txt = int.toString();
    while(txt.length < 4)
        txt = "0" + txt;
    txt =  txt.slice(0,2) + ":" + txt.slice(2,4);
    return txt;
}

function endGame(){
    clickable = false;
    isPlaying = false;
    setTimeout(resetClickable, 2500)
    button.innerText = "OKAY STOP"; 
    displayHighScore();
    clicks = 0;
}

function resetClickable(){
    button.innerText = "CLICK";
    clickable = true;
}

function displayHighScore(){
    if(clicks > localStorage.record || !localStorage.record){
        localStorage.record = clicks;

        record.innerText = "NEW HIGH SCORE"

        let newHighScore = document.createElement("div");
        newHighScore.innerText = clicks;
        record.appendChild(newHighScore);

    } else {
        recordDisplay.innerText = "Most Clicks Ever: " + localStorage.record;
    }
}