

function quad(a, b, c){
    var q = b * b;
    q -= 4 * a * c;
    q = Math.sqrt(q);

    var bPos = b * -1
    var bNeg = b * -1

    bPos += q;
    bNeg -= q;

    bPos = bPos / (2 * a);
    bNeg = bNeg / (2 * a);

    return [bPos, bNeg];
}

console.log(quad(2,2.5,45))

console.log(quad(4,17,-2))


console.log(quad(4,17,-14))
