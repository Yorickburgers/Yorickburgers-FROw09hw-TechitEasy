import {inventory} from "../constants/inventory.js";

export function buttonLog(text) {
    console.log(text);
}

console.log("Opdracht 3a");
export function mostSoldFirst() {
    const mostSoldFirstTV = inventory.sort((a, b) => {
        if (a.sold > b.sold) {
            return -1;
        }
        if (a.sold < b.sold) {
            return 1;
        }
        return 0;
    });
    console.log(mostSoldFirstTV);
}

export function cheapestFirst() {
    const cheapestTV = inventory.sort((a, b) => {
        if (a.price < b.price) {
            return -1;
        }
        if (a.sold > b.sold) {
            return 1;
        }
        return 0;
    });
    console.log(cheapestTV);
}

export function sortRefreshRate() {
    const highRefreshRateTV = inventory.sort((a, b) => {
       if (a.refreshRate > b.refreshRate) {
           return -1;
       }
       if (a.refreshRate < b.refreshRate) {
           return 1;
       }
       return 0;
    });
    console.log(highRefreshRateTV);
}
