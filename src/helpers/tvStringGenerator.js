import {bestSellingTv} from "../constants/inventory.js"

const tvString = () => (`${bestSellingTv.brand} ${bestSellingTv.type} - ${bestSellingTv.name}`);
//console.log(tvString());

export default tvString;