
let iObject = {
    value: 0,
    changeTheValue: () => {
        this.value += 1;
        console.log(23423, this);
    }
}
iObject.changeTheValue()
iObject.changeTheValue()
iObject.changeTheValue()
iObject.changeTheValue()
console.log(iObject.changeTheValue())