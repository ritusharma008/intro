import {message} from "./lib.js";
import {display} from "./lib.js";
import{Employee} from "./lib.js";

console.log(message);
var data = display(name);
var name =prompt("enter your name");
console.log(data);

let emp1 = new Employee("ritu",101,"gaming intern");
emp1.dispDetails();
