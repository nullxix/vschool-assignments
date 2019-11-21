var defaultAction = "add"
var defaultActionSet = false;
var calculations = document.getElementById("calculations");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var submitEvent = new Event("submit");

add.addEventListener("click", function(){setDefaultAction("add")})
subtract.addEventListener("click", function(){setDefaultAction("subtract")})
multiply.addEventListener("click", function(){setDefaultAction("multiply")})

document.calculator.addEventListener("submit", function(e){
    e.preventDefault();
    formAction(e);
    console.dir(e)
    console.dir(e.currentTarget)
})


function formAction(e){
    var f = e.target.first.value;
    var s = e.target.second.value;
    var result = 0;
    switch(defaultAction){
        case "add": result= f + s
                    break
        case "subtract": result = f - s
                    break
        case "multiply": result = f * s
                    break
    }
    output(result)
}

function setDefaultAction(action){
    defaultAction = action;
    document.calculator.dispatchEvent(submitEvent);
}

function output(num){
    console.log(num)
    var singleCalc = document.createElement("div");
    singleCalc.innerText = num;
    singleCalc.classList += "calc-single-output";
    calculations.insertBefore(singleCalc, calculations.firstChild)
}