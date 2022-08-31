let message = "This is  module Concepts";

let display = (name) => {
    return ` Hi ${name} Welcome to ingenuity gaming!` ;
}
class Employee {
    constructor(name, id, designation) {
        this.name = name;
        this.id = id;
        this.designation = designation;

    }
    dispDetails() {
        console.log(`employee Name : ${this.name}\n employee Id: ${this.id}\n employee designation ${this.designation}`);
    }
}
export{message,display,Employee}