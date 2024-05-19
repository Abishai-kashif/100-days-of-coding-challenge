"use strict";
const student = {
    name: "Abishai Kashif",
    age: 17,
    rollNumber: 1453,
    isMale: true,
    getInformation() {
        return `Name: ${this.name}, Age: ${this.age}, RollNumber: ${this.rollNumber}, Gender: ${this.isMale ? "Male" : "Female"}`; // accessing multiple properties using 'this' in the same object
    },
};
console.log(student.getInformation()); // output: Abishai kashif
