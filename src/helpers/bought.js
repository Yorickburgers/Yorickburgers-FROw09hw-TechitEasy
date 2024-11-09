import {inventory} from "../constants/inventory.js";

export function boughtTV() {
    let tvStock = 0;

    for (let i = 0; i < inventory.length; i++) {
        tvStock = tvStock + inventory[i].originalStock;
    }
    return tvStock;
}

console.log(boughtTV());