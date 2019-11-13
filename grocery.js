
var shopper = {
    name: "Sally",
    cash: 74.01,
    isHappy: true,
    groceryCart: ['apples', 'bananas', 'oranges'],
    spillGroceries: function(){
        var iterations = this.groceryCart.length;
        for (i = 0; i < iterations; i++){
            //yeah this is a funky way of doing it
            console.log(this.groceryCart.splice(0, 1) + " fell out of the cart!"); }
    }
}

shopper.spillGroceries();