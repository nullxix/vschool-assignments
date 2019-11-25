var pests = document.pests;
var output = document.getElementById("output");
var goombas = pests.goombas;
var bobombs = pests.bobombs;
var cheepcheeps = pests.cheepcheeps;
var floatingCoins = document.querySelectorAll(".floating-coin");

pests.addEventListener("submit", createBill)
goombas.addEventListener("input", function(e){updateFloatingCoin(e, goombas, 0)})
bobombs.addEventListener("input", function(e){updateFloatingCoin(e, bobombs, 1)})
cheepcheeps.addEventListener("input", function(e){updateFloatingCoin(e, cheepcheeps, 2)})
// window.addEventListener("keypress", function(e){
//     updateFloatingCoin(e, goombas, 0);
//     updateFloatingCoin(e, bobombs, 1);
//     updateFloatingCoin(e, cheepcheeps, 2);
// })

function createBill(e){
    e.preventDefault();
    var total = Number(e.target.goombas.value) * 5 + Number(e.target.bobombs.value) * 7 + Number(e.target.cheepcheeps.value) * 11;
    spitOut("Peach owes Mario " + total + " smoochies")
}

function spitOut(txt){
    output.innerText += txt + "\n";
}

function updateFloatingCoin(e, monster, floatingCoin){
    var multiplier = 1;
    switch (floatingCoin){
            case 0:
                multiplier = 5;
                break
            case 1:
                multiplier = 7;
                break
            case 2:
                multiplier = 11;
                break
    }
    multiplier != 0 && monster.value != 0 ?
    floatingCoins[floatingCoin].textContent = monster.value * multiplier
    : floatingCoins[floatingCoin].textContent = "";
    
    // console.dir(e)
    // switch(e.target.outerHTML){
    //     case "<input name=\"goombas\">":
    //             floatingCoins[0] = e.target.value
    //             break
    //     case "<input name=\"bobombs\">":
    //             floatingCoins[1] = e.target.value
    //             break
    //     case "<input name=\"cheepcheeps\">":
    //             floatingCoins[2] = e.target.value
    //             break
    // }
}