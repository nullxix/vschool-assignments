
// Write a function that accepts two numbers as parameters, and returns the sum.

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function largest(arg){
    var biggest = arg[0];
    arg.forEach(num => {
        num > biggest ? biggest = num :null;
    })
    return biggest;

}

var array1 = [1,3,7,22,9,-30,2*14]
console.log("Largest: " + largest(array1));
// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function oddEven(num){
    var returnMe;
    num % 2 === 0 ?
    returnMe = "Even"
    : returnMe = "Odd";

    return returnMe;
}
console.log(oddEven(11))
console.log(oddEven(12))
// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function doublecut(str){
    var returnMe;
    str.length <= 20?
    returnMe = str + str
    : returnMe = str.slice(0,(str.length/2)) ;
    return returnMe;
}

console.log(doublecut("short"))
console.log(doublecut('veryveryverylongstringthatshoudljustgoandgoandneverend'))
// Optional Challenge
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// The first numbers are:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// So if n were 6, the sum of 1+1+2+3+5+8 would be 20

// Don't hardcode the sequence.

function fib(n){
    var fibn = [0,1];
    fibn.length = n+1;

    for(var i = 2; i < n+1; i++){
        fibn[i] = fibn[i-1] + fibn[i-2]
    }
    var sum = 0;
    var logStr = "Fibbonaci is ";

    fibn.forEach(ele => {
        logStr += ele + ", ";
        sum += ele;
    })
    logStr += "for a total of " + sum;
    console.log(logStr)
}
fib(1)
fib(2)
fib(3)
fib(4)
fib(7)
fib(70)
// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )