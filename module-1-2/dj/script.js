var boxes = document.querySelectorAll(".square")

boxes.forEach(el => {
    el.addEventListener("mousedown", function(el){red(el)})
    el.addEventListener("mouseup", function(el){yellow(el)})
    el.addEventListener("dblclick", function(el){green(el)})
    //el.addEventListener("scroll", function(el){orange(el)})
    // el.addEventListener("mousedown", function(el){blue(el)})
    // el.addEventListener("mousedown", function(el){blue(el)})
    // el.addEventListener("mousedown", function(el){blue(el)})
    // el.addEventListener("mousedown", function(el){blue(el)})
    // el.addEventListener("mousedown", function(el){blue(el)})
    // el.addEventListener("mousedown", function(el){blue(el)})
    // el.addEventListener("mousedown", function(el){blue(el)})
})

// window.addEventListener("scroll", function(){
//     boxes.forEach(el => {
//         el.style.backgroundColor = "orange";
//     })
// })

window.onscroll = function (e){
    colorAll("orange");
}



window.addEventListener("keydown", e => {
    switch(e.keyCode){
        case 82:
            colorAll("red")
            break;
        case 79:
            colorAll("orange")
            break;
        case 89:
            colorAll("yellow")
            break;
        case 71:
            colorAll("green")
            break;
        case 66:
            colorAll("blue")
            break;

    }
})

function colorAll(c){
    boxes.forEach(el => {
        color2(el, c)
    })
}
function color2(el, c){
    
    el.style.backgroundColor = c;
}

function blue(e){
    color(e, "blue")
}

function red(e){
    console.log("HEY!")
    color(e, "red")
}

function yellow(e){
    color(e, "yellow")
}

function green(e){
    color(e, "green")
}

function orange(e){
    color(e, "orange")
}

function color(e, c){
    e.target.style.backgroundColor = c;
}

function def(e){
    color(e, "mediumorchid");
}