const editTxt = "edit"
const xTxt = "X"
const list = document.getElementById("list"); 

document.addItem.addEventListener("submit", function(e){
    e.preventDefault();
    createListItem(document.addItem.title.value)
    document.addItem.title.value = "";
})

let existingItems = document.getElementsByClassName("listItem");

for(let i = 0; i < existingItems.length; i++){
    addListItemButtons(existingItems[i]);
}

function createListItem(txt){
    let li = document.createElement("li");
    let div = document.createElement("div");
    let editBtn = document.createElement("button");
    let xBtn = document.createElement("button");
    
    li.classList.add("listItem")
    div.innerText = txt;
    editBtn.innerText = editTxt;

    editBtn.addEventListener("click", function(e){
        editListItem(div)
    })

    xBtn.innerText = xTxt;
    xBtn.addEventListener("click", function(e){
        removeListItem(li);
    })

    li.appendChild(div);
    li.appendChild(xBtn);
    li.appendChild(editBtn);

    list.insertBefore(li, list.firstChild)
}

function editListItem(div){
    let temp = document.createElement("input");
    temp.placeholder = div.innerText;
    
    //save the innertext, just in case we want
    //to reset it
    div.txtHolder = div.innerText;

    //we don't want the div to be visible, for reasons
    div.innerText = "";

    div.appendChild(temp)
    temp.focus();

    div.parentNode.addEventListener("keydown", function(e){
        switch(e.keyCode){
            //user press enter
            case 13:
                let newTxt = temp.value;
                div.removeChild(temp);
                div.innerText = newTxt;
                break;
            //user press esc
            case 27:
                div.removeChild(temp);
                div.innerText = div.txtHolder;
                break;

        }
    })
}

function removeListItem(li){
    list.removeChild(li);
}

function addListItemButtons(li){
    var buttons = li.getElementsByTagName("button");
    for(let i = 0; i < buttons.length; i++){
        btn = buttons[i]
        switch(btn.innerText){
            case "edit":
                btn.addEventListener("click", function(e){
                    editListItem(li.getElementsByTagName("div")[0]);
                });
                break;
            case "X":
                btn.addEventListener("click", function(e){
                    removeListItem(li);
                });
                break;
        }
    }
}