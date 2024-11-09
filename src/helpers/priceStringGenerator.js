import {bestSellingTv} from "../constants/inventory.js"

const tvPrice = () => (`€${bestSellingTv.price},-`);
//console.log(tvPrice());
export default tvPrice;