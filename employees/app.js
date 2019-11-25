
function Employee(...params){

    const [name, job, salary, status] = params;
    
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status;
    // console.log(name, job, salary, status)
}

function SuperiorEmployee(name, job, salary, status){
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status;
}

let alice = new Employee("Alice", "Security", 12000, "active")
console.log(alice)