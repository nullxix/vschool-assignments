function doubleAll(arr){
   var array = arr.map((num) => {
        num *= 2;
        return num;
    })
    return array;
}

let numbers = [-1, 0, 1, 2, 22, 3, 45, 4, 29, 5, 33, 6, 7, 36, 8, 9, -33, 10, 11, 12, 13, 14]
console.log(doubleAll(numbers))

function stringItUp(arr){
    var strings = arr.map((str) => {
            return str.toString();
    })
    return strings;
}

console.log(stringItUp(numbers))

let words = [
    "billy",
    "bob",
    "licorice",
    "goat",
    "vampire",
    "orangutan",
    "rumplestiltskin",
    "aardvaark"
]

function capitalize(arr){
    let caps = arr.map((word) => {
        return word.toUpperCase();
    })
    return caps;
}

console.log(capitalize(words))

let keypairs = [];
for(let i = 0; i < words.length && i < numbers.length; i++){
    keypairs[i] = { 
        "name": words[i],
        "number": numbers[i]
     }
}

let crazypairs = words.map((word, i) => {
    let num = i < numbers.length ? numbers[i] : 7;
    return {"name": word, "number": num};
})

console.log(keypairs)
console.log(crazypairs)

function getDemStrings(arr){
    var strings = arr.map((obj) => {
        return obj.name;
    })
    return strings;
}

console.log(getDemStrings(crazypairs))

function canMatrix(arr){
    let peeps = arr.filter((obj) => {
            if(obj.number > 2){
                return obj;
            }
        })
    peeps.map((ele) => {
        console.log(ele["name"], "can go to the matrix")
    })
}

canMatrix(crazypairs)

function fiveUp(arr){
    return arr.filter((e) => {
        return e > 5;
    })
}

console.log(fiveUp(numbers))

function theEven(arr){
    return arr.filter((e) => {
        return e % 2 == 0;
    })
}
console.log(theEven(numbers))

function fiveLetterWord(arr){
    return arr.filter((e) => {
        return e.length < 6
    })
}

console.log(fiveLetterWord(words));

let peeps = [
    { name:"Andrew", member: false},
    { name:"Garfield", member: true},
    { name:"Mary", member: false},
    { name:"Bob", member: true},
    { name:"Qristofr", member: true},
    { name:"Luly", member: false},
    { name:"Lyca", member: false},
    { name:"N", member: false},
    { name:"Thrope", member: true},
    { name:"Dave", member: false},
    { name:"Van", member: false},
]
function members(arr){
    return arr.filter((e) => {
        return e.member? e: 0;
    })
}

console.log(members(peeps))

function smallToBig(arr){
    return arr.sort((a, b) => { return a - b})
}

function bigToSmall(arr){
    return arr.sort((a, b) => { return b - a})
}

console.log(smallToBig(numbers))
console.log(bigToSmall(numbers))

function sortLength(arr2){
    let arr = arr2;
    return arr.sort((a, b) => { return a.length - b.length })
}

function sortLengthReverse(arr2){
    let arr = arr2;
    return arr.sort((a, b) => { return b.length - a.length })
}

console.log(sortLength(words));
console.log(sortLengthReverse(words));
let sortedWords = words;

console.log(sortedWords.sort())
console.log(sortedWords)

// console.log(keypairs.sort((a, b) => {return a.number - b.number}))

console.log( 
    function ohYeah(){
     return keypairs.sort( (a, b) => {
         return a.number - b.number
        }) 
    }()
);

console.log(
    function ohYeah(){
     return "banana"
    }()
);

(function newFunction(){
    console.log("whatever bob")
}) ()

;;;;{}()=>{};( function ohBaby(){
     console.log("mama");
})();

let result = function(){
    console.log("binocular")
}();

(function(){
    console.log("really")
}) ()

!function(){
    console.log("everything")
} ()

~(function(){
    console.log("dweeerrooo")
}) ()

+(function(){
    console.log("For Rohan!")
}) ()

==(function(){
    console.log("lemon juice")
}) ()

function gimme(arr){
    return arr.reduce((acc, current) =>{
        return acc += current*2;
    })
}

console.log(gimme(numbers));
console.log(gimme([1,1,1,1]))

var lab = [1, 1, 1, 1];
console.log(
    lab.reduce(function(accumulator, currentValue, index, array){
        return accumulator + currentValue + index
    })
)

console.log(
    "\n\nThe Result: \n\n",

 //arr.reduce(callback(accumulator, currentValue))
   

    numbers.reduce((acc, cv) =>{
        
        console.log(typeof(acc), " | ", acc, " |-| ", Array.isArray(acc), " | ", cv)
       
        if(!Array.isArray(acc))
            acc = [];
        
        cv > 5 && acc.push(cv)
        
        return acc
    })
)

console.log(
    numbers,
    numbers.filter((ele, i, arr) => {
        let burp = 1;
        for(i += 10; i > 0; i--){
            // console.log(ele, ">>>>")
            burp = burp * (ele) * (ele - i);
            // console.log(ele, "| B: ", burp, " :: ", i)
        }

        return burp ;
    }),
)

console.log(
    numbers.reduce((acc, cv, i) => {
        return acc + cv.toString() + (i < numbers.length - 1 ? "~~": "").toString()
    }, "")
)

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(
    voters.reduce((acc, cv, i, arr) => {
        //increase acc by 1 if they voted, 0 otherwise
        return acc + arr[i].voted;
    }, 0)
)

let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(
    wishlist.reduce((acc, cv, i, arr) => {
        return acc + arr[i].price
    }, 0)
)

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(
    arrays.reduce((acc, cv, i, arr) => {
        return acc.concat(cv)
    }, []),
    "\n",
    arrays.reduce((acc, cv, i, arr) => {
            acc[i] = cv;
            return acc
    }, new Array())
)

var voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(
    voters2.reduce((acc, cv, i, arr) => {
            
            if(arr[i].age <= 25)
                    acc.young++;

            if(arr[i].age > 25 && 45 > arr[i].age)
                    acc.middle++;

            if(arr[i].age >= 45)
                    acc.old++;

            return acc;
    }, {young: 0, middle: 0, old: 0})
)

let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// Returns a list of everyone older than 18, which is
// sorted alphabetically by last name, and where
// each name and age is embedded in a string that looks like an HTML <li> element.

// Create another array of one or more individuals and add it to the original array.
// Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
// Remove the second individual from the array.
// Return the array in reverse order.
let d = "";
console.log(
    peopleArray.filter((cv, i, arr) => {
        return cv.age > 18
    }).sort((a, b) => {
        console.log("OOOOOO  ", [a,b].sort())
        if(a.lastName.toUpperCase() > b.lastName.toUpperCase())
            return 1;
        if(a.lastName.toUpperCase() < b.lastName.toUpperCase())
            return -1;
        return 0;
    }),
    "AAAAAAAA",
    peopleArray.filter((cv, i, arr) => {
        let lastChar = arr[i].lastName.slice(arr[i].lastName.length-1).toUpperCase()
        // lastChar = arr[i].lastName.slice(arr[i].lastName.length)
        d += (lastChar +  (i < arr.length - 1 ? ":" : ""))
        return lastChar === "A" || lastChar === "Y"
    }).sort((a, b) => {
        return -1;
    }),
    " <" + d + ">",
    peopleArray + "ngyfuvhibjkl",
    peopleArray = peopleArray = peopleArray.sort((a, b)=>{
        return 1;
    })
);

console.log(
    numbers,
    numbers.map((ele, i, arr) => {
        return ele.toString();
    }),
);