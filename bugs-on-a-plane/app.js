var form = document.getElementById("airline-form");
var submit = document.getElementById(submit);
var query = document.querySelector;


form.addEventListener("submit", function (e){
    e.preventDefault()
    formAlert()
});

function formAlert() {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];

    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }
    let mappedDiet = diet;
    for(let i = 0; i < mappedDiet.length; i++){
        mappedDiet[i] = " " + mappedDiet[i];
    }
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + mappedDiet + "\nAwesome, now if you die, it won't be an accident..");
}

