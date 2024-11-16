import {bestSellingTv} from "../constants/inventory.js"

const tvString = (tv) => (`${tv.brand} ${tv.type} - ${tv.name}`);
//console.log(tvString());

export default tvString;