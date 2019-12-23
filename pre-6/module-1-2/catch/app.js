function add(a, b){
    try {
        if(typeof a  != "number" || typeof b != "number")
            throw("You can't do that")
            console.log(a + b)
    } catch(err) {
        console.log(err)
    } finally {
        console.log("IM ALIVE")
    }
}

add(2, 3)
add(7,"twelve")
add(12, 7.2)
add("asdjasdas",3)
add("2", 3)