function it(arr, func){
    var returnMe;
      for(var i = 0; i < arr.length; i++){
              func(arr,i)
      }
      return returnMe;
}


//Write a for loop that will push every other fruit to an array.

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var otherFruit = [];
it(fruit, function(arr, i){
    i % 2 === 0 &&
    console.log(otherFruit[otherFruit.push(arr[i]) - 1]);
    console.log(arr[i])
})
console.log(otherFruit)

//Create an array that mimics a grid like the following using nested for loops:
//[[0, 0, 0], 
//[[0, 0, 0], 
//[[0, 0, 0], 
var colA = [];
for(var i = 0; i < 3; i++){
    
    function colB(){
        var columnB = [];
        for(var i = 0; i < 3; i++){
            columnB[i] = 0;
        }
        return columnB;
    }

    colA[i] = colB()
}
console.log(colA);
/*
2.Create an array that mimics a grid like the following using nested for loops:

[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]
*/

var colNum = [];
for(var i = 0; i < 3; i++){
    
    function colB(){
        var columnB = [];
        for(var q = 0; q < 3; q++){
            columnB[q] = i;
        }
        return columnB;
    }

    colNum[i] = colB()
}
console.log(colNum);

/*
3.Create an array that mimics a grid like the following using nested for loops:

[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]
*/


var colSeq = [];
for(var i = 0; i < 3; i++){
    
    function colB(){
        var columnB = [];
        for(var q = 0; q < 3; q++){
            columnB[q] = q;
        }
        return columnB;
    }

    colSeq[i] = colB()
}
console.log(colSeq);

var colNew = [];
for(var i = 0; i < 3; i++){
    var colB = []

    for(var i = 0; i < 3; i++){
        colB[i] = 0;
    }

    colNew[i] = colB;
}

console.log(colNew)

/*
Given a grid like the previous ones, write a nested for loop that would change every number to an x.
var grid = [["x", ...], 
            ["x", ...], 
            ["x",...], ...] 
*/

function rewrite(arr, value){

    function getValue(){
        if(value instanceof Function){
            return value()
        } else {
            return value
        }
    }

    if(Array.isArray(arr)){

        for(var i = 0; i < arr.length; i++){
    
            if(Array.isArray(arr[i])){

                for(var q = 0; q < arr[i].length; q++){
                    var changeMe = arr[i];
                    console.log("iQ: " + i + " " + q)
                    console.log(arr[i][q])
                    console.log("----")

                    arr[i][q] = getValue();

                    console.log("v1: " + getValue() + " | " + arr[i][q] + " " + i + " " + q)
                } 
            } else {
                arr[i] = getValue();
                console.log("v2: " + getValue())
            }
        }
    }
    return arr;
}

console.log(rewrite(colNum, 7));
console.log(rewrite(colSeq, 7));



//re-write with forEach 
//re-write with forEach ==>