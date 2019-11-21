

var destinations = ["Alaska", "Pakistan", "Alberqerqe", "Blitz and Chips", "Australia"];
var dietaryConcerns = ["Allergic to Everything", "Paleo", "Water Fast", "Vegan", "Vegetarian", "Vegan with Fish", "Neo Vegan", "Paleo Vegan", "Super Paleo Vegon Plus"];
var destDOM = document.travelForm.destinations;
var dietaryContainer = document.getElementById("dietary-container")
var theForm = document.travelForm;
var allTheInputFields = [];

theForm.addEventListener("submit", function(e){

});

//f-name

//l-name

//age

//gend

//destin
//build destinations
destinations.sort();
destinations.forEach(dest => { 
    var destOpt = document.createElement("option");
    destOpt.value = dest.toLowerCase; 
    destOpt.innerText = dest;
    document.travelForm.destinations.appendChild(destOpt);
})

//diet
//build diet
var i = 0;
dietaryConcerns.forEach(diet => { 
    var dietOpt = document.createElement("input");
    dietOpt.name = "diet" + i;
    dietOpt.type = "checkbox"
    dietOpt.value = diet.toLowerCase; 
    dietOpt.innerText = diet;

    var optCont = document.createElement("div");
    optCont.classList.add("diet-opt-container");

    var desc = document.createElement("span");
    desc.innerText = diet;


    optCont.appendChild(dietOpt);
    optCont.appendChild(desc);

    dietaryContainer.appendChild(optCont);
    i++;
})
//populate input fields
//f name
addF(theForm.fName)
//l name
addF(theForm.lName)
//age
addF(theForm.age)
//gender
addF(theForm.gender)
//destination
//diet
function addF(field){
    allTheInputFields.push(field)
}

//hit-flight butn

