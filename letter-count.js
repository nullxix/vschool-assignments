var string = "My billy bob wont eat his head but all the big brother bundles boycott the pigs"

function getCount(str){
    var stringAsLetters = str.split("");
    var letters = new Set(stringAsLetters);
    var letterCount = new Object;
    
    letters.forEach(ltr => {    
        letterCount[ltr] = 0;
    })

    stringAsLetters.forEach(ele =>{
        letterCount[ele]++;
    })

    console.log(letterCount)

    var popularLetter = ["none","0"]
    Object.entries(letterCount).forEach(arr =>{
        arr[1] > popularLetter[1] ?
        popularLetter = arr
        : null;
    })
    console.log(popularLetter)
}

getCount(string)