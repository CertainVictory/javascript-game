"use strict";
let ourHp = 40;
let grantsHp = 10;
let dmg = Math.floor(Math.random() * 2) + 1;
let wins = 0;

let gameStart = prompt("Do you want to play?");


if (gameStart == "yes") {
    let name = prompt("What is your name?");

        while (ourHp >=0) {
            ourHp=ourHp-dmg;
            console.log(`${name} has ${ourHp} health left!`);
            grantsHp=grantsHp-dmg;
            console.log(`Grant the Almighty has ${grantsHp} health left!`);
            if (grantsHp <=0) {
                wins++;
                grantsHp = 10;
                console.log(`${name} wins this round!`)
            }
            if (ourHp <=0){
                break;
                console.log(`Game over, try again!`)
            }
            if (wins === 3) {
                console.log(`${name} has defeated Grant The Almighty!`)
                break;
            }
    
    }

} else if (gameStart == "no") {
    console.log("You would have lost anyway.")
} else {
    console.log("That's not valid.")

}


// let wins = ;

// 

// }



// wins
// ourHp
// grantsHp