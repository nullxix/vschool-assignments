

//accept unlimited params
function Employee(...params){

    const [name, job, salary, status] = params;
    
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status;
    if(params.length > 4)
        this.everythingElse = params.slice[params[4].length]
}

//What we usually write
function SuperiorEmployee(name, job, salary, status){
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status;
}

//What I WANT to write

let alice = new Employee("Alice", "Security", 12000, "active")
console.log(alice)

function buildConstructor(...params){

    function returnMe(){
            console.log("merp")
    }
    //everything breaks if you uncomment this
    //returnMe = () => {console.log("ridoo")}

    return returnMe;
}


let PerfectEmployee = buildConstructor("name", "job", "salary", "status")

function bob(){};

console.log("tttt")
bob = new PerfectEmployee("Bob", "Construction", 300, "part-time")
console.log("tttt")
console.log(bob)
 console.log(typeof(bob))