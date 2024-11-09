import {inventory} from "../constants/inventory.js";

export function soldTV() {
    let numberTVsSold = 0;

    for (let i = 0; i < inventory.length; i++) {
        numberTVsSold = numberTVsSold + inventory[i].sold;
    }
    return numberTVsSold;
}

//console.log(soldTV());