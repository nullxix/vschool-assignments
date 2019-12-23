//Playground for object.entries, object.values, and the js map thing


//initiate test array
//lets give it random values

var order = ["I", "II", "III", "IV", "A","X","Q","F",
            "00-00","00-10","01-10","10-00","10-01",
            "Alpha", "Delta", "Quatra", "Epsilon", "Theta", "Omega"];
var chaos = [];
var bobaCode = new Object();


chaos.length = order.length+Math.floor(Math.random()*50);
for(var i = 0; i<chaos.length; i++){
    chaos[i] = Math.random()*99
    if(Math.random() > 0.5 ){
        chaos[i] = Math.floor(chaos[i])
    } else {
        chaos[i] = Math.round(chaos[i]*10)/10;
    }
}


// load the Object

for(var i = 0; i < order.length; i++){
    bobaCode[order[i]] = chaos[i] ;
}

// turn Object into array

var bobaEntry = Object.entries(bobaCode);
var bobaValues = Object.values(bobaCode);
console.log(bobaCode)
console.log(bobaEntry)
console.log(bobaValues)