const colors = ["orange", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    console.log(subItem)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    dropDown.innerHTML = "";
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.setAttribute("class", e.target.value)
        //e.target.parentElement.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var newValue = document.getElementById("input").value;
    if(newValue.charAt(newValue.length-1) != " ")
        newValue += " ";

    var subItemValue = newValue;
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}

function changeColor(e){
    newColor = "red"
    e.setAttribute("class", newColor)
}



