
function checkIfEven(num){
    num%2===0 ? console.log(num + ": It\'s even") : console.log(num + ": It\'s odd");
}

checkIfEven(7)
checkIfEven(4)

if (typeof "dog" === 'string')
{
    console.log(typeof true + "\n JUST KIDDING, it's a string");
}

"cat".length === 3 ? console.log("IT'S THREE GUYS") : null;

var person = {
    name: "Lawrence",
    status: "Nobleman"
}

person.name[0].toUpperCase() === "L" ? console.log("welcome to L-Land") : null;



true ? console.log("Hey ;)"): null;


for (var i = 0; i < 101; console.log(i++)){
    i % 2 === 0 ? console.log("\nAn even number: ") : console.log("\nAn odd number: ")
}

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computerCount = 0;

for(var i = 0; i < officeItems.length; i++){
  officeItems[i] === "computer" && computerCount++;
}

console.log(computerCount + " computers")

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      var peep = peopleWhoWantToSeeMadMaxFuryRoad[i];
      var areThey;
      var gender;

      peep.age && 
      peep.age >= 18 ? 
      areThey = "is"
      : areThey = "is not";

      peep.gender === "male" ?
      gender = "masculine"
      : gender = "feminine";

      console.log("The " + gender + " specimen, " +  peep.name + ", " + areThey + " old enough") 
  }

  var light;
  function toggle(count){
        while(count > 0){
            light ?
            light = false
            : light = true;

            count--;
        }

        var lightOn;
        light ?
        lightOn = "on"
        : lightOn = "off"
        return lightOn;
  }

  function iterate(arr, func){
      var returnMe;
        for(var i = 0; i < arr.length; i++){
                returnMe = func(arr[i]);
        }
        return returnMe;
  }
  
  var flipFlop = [1, 2, 5, 6, 8, 1];

  console.log("the light is " + iterate(flipFlop, toggle));

  console.log("the light is " + iterate(flipFlop, toggle));

  console.log("the light is " + iterate(flipFlop, toggle));

  function talk(){
      return "tree";
  }

  console.log( talk );