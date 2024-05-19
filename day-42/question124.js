"use strict";
const person = {
    name: "Abishai Kashif",
    age: 17,
    isMale: true,
    getName() {
        return this.name; // using 'this' keyword to refers to the obj itself & returns its name property
    },
};
console.log(person.getName()); // output: Abishai kashif
// This method correctly identifies and returns the object's 'name' property using 'this'.
