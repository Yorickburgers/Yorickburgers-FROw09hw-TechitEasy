import {boughtTV} from "./bought.js";
import {soldTV} from './sold.js';

const toSell = () => boughtTV() - soldTV();


export default toSell;