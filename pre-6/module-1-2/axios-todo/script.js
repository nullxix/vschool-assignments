// const axios = require("axios"); //<--USE CDN

const todoContainer = document.getElementById("todo-container")
const addContainer = document.getElementById("add-container");
const addText = document.getElementById("add-text");
const addButton = document.getElementById("add");
addButton.addEventListener("click", addTodo);
addText.addEventListener("keydown", event => {
    event.keyCode === 13 && addTodo();
})
const currentTodos = [];

// Part 1 - GET
// The user can see their current list of todos.
// Todos show up as soon as the page loads.
// If a todo item is complete, it should have a strikethrough line on it
// Images should be displayed as images if there are any
// Hints:


function displayTodo(txt, id, completed){

    console.log("displaying \"", txt + "\"", id, completed)
    
    //create and append DOM elements

    // <div class="todo">
    //         <button class="kill-todo">X</button>
    //         <div class="todo-content"></div>
    //         <div class="mark-todo circle"></div>
    // </div>

    let theTodo = document.createElement("div");
    theTodo.classList = "todo";
    
    let killBtn = document.createElement("button");
    killBtn.classList = "kill-todo";
    killBtn.addEventListener("click", event => {
        console.log("clicked kill")
        todoContainer.removeChild(theTodo);
        killTodo(id);
    })

    let todoContent = document.createElement("div")
    todoContent.classList = "todo-content";
    todoContent.innerText = txt;

    let markTodo = document.createElement("div");
    completed ? markTodo.classList = "mark-todo check" //leave checkmark if completed
    : markTodo.classList = "mark-todo circle";          //circle if not completed
    markTodo.addEventListener("click", event => {
        toggleTodo(theTodo, id)
    } )

    theTodo.appendChild(killBtn);
    theTodo.appendChild(todoContent);
    theTodo.appendChild(markTodo);
 

    todoContainer.appendChild(theTodo);
}


async function getTodos(){
    // https://api.vschool.io/<yourname>/todo
    todoContainer.innerText = "";

    let theTodos = [];
    await axios.get("https://api.vschool.io/nicholas/todo").then(response => {
        theTodos = response.data;
    })

    theTodos.forEach(element => {
        newTodo(element.title, element._id, element.completed)
    });
}

function newTodo(txt, id, completed){
    displayTodo(txt, id, completed)

    let theTodo = {txt, id, completed}
    currentTodos[id] = theTodo;
}

function toggleTodo(theTodo, id){
    console.log("toggling todo: ", id)
    let theMark = theTodo.getElementsByClassName("mark-todo")[0];
    let hasCheck = theMark.classList.value.search("check") !== -1 ? true: false;
    
    let addMe = "check";
    let removeMe = "check";
    hasCheck ? addMe = "circle" : removeMe = "circle"

    theMark.classList.add(addMe);
    theMark.classList.remove(removeMe);

    let todoChange = {"completed": !hasCheck};

    axios.put(`https://api.vschool.io/nicholas/todo/${id}`, todoChange)
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    });
}

async function addTodo(){
    console.log("ADDING")
    let theNewTodo = {title: addText.value}
    await axios.post(`https://api.vschool.io/nicholas/todo/`, theNewTodo )
    getTodos();
    addText.value = "";
}

function killTodo(id){
    axios.delete(`https://api.vschool.io/nicholas/todo/${id}`)
}

// A createTodo function that takes one todo and inserts it to the DOM is very userfull

// Use postman to get those first few todos in there with some images so you can style your list!

// Part 2 - POST
// The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item. Making the new todo appear without a refresh is extra credit, but you're encouraged to attempt it.
// A user should be able to geive the item a title.
// A user should be able to give the item a price.
// A user should be able to give the item a description.
// A user should be able to attach an imgUrl to the item
// Part 3 - PUT Part 1
// Each todo will have a checkbox where it can be marked complete or incomplete
// Checking the checkbox should update the database
// Part 4 - DELETE
// A user will be able to delete todos (this is different from marking a todo as "completed")
// Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo
// Part 5 - PUT Part 2 (extra credit)
// Each Todo will have an "edit" button.
// When clicked, the info will change to input boxes that are autofilled with the old Todo data
// A user can change the value of these inputs
// When the "edit" button is clicked, it will change to a "save" button.
// When "save" is clicked, the form will disapear, and the new values will be displayed.
// On save, the todo will be edited in the database

//
// INITIALIZE PROGRAM
//

getTodos()
