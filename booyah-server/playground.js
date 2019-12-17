const a = {
    name: "bob",
    age: 12
}

const b = {
    age: 27
}

const c = {...a, ...b}

console.log(c)