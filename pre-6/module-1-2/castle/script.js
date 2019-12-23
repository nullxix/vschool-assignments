var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require("node-fetch")
// const xhr = new XMLHttpRequest();
// let partials = [];

// console.log(xhr);

// xhr.open("GET", "https://api.vschool.io/pokemon", true);
// xhr.send();

// xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4 && xhr.status > 199 && xhr.status < 300){
//         const data = JSON.parse(xhr.responseText) //parse the response
//         handleData(data);
//     } else if(xhr.readyState === 3){
//         partials.push(xhr.responseText);
//     }
// }

// function handleData(data){
//     console.log(data.objects[0].pokemon)
//     let poke = data.objects[0].pokemon;
//     for(let i = 0; i < poke.length; i++){
//     let pokeName = poke[i].name;
//      console.log("--->\t\t", poke[i].name, `${pokeName.length < 16 ? "\t": ""}${pokeName.length < 15 ? "\t": ""}\t<---` )
//     }
//     doThePartials();
// }

// let partialSum = [];
// function doThePartials(){
//     let partialSize = [];
//     partials.forEach((ele, i) => {
//         partialSize[i] = ele.length;
//     })
//     console.log(partialSize)
// }


function getData(url) {
    return fetch(url)
        .then(response => response.json())
}

getData("https://swapi.co/api/people/1")
    .then(lukeData => {
        console.log(lukeData.name)
        console.log(lukeData.homeworld)
        return getData(lukeData.homeworld)
    })
    .then(planetData => {
        console.log(planetData.name)
    })
