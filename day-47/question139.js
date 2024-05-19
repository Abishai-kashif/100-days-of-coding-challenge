"use strict";
// LISTING OF FOUR RESERVED WORDS :
let person = {
    name: "Abishai",
    age: 17,
    isMale: true,
    learn(what) {
        return `Hi, my name is ${this.name} and I am learning ${what}.`;
    },
};
// 2.  function:
//          Is used to define an traditional function .
function f1() {
    console.log("Hello, World!");
}
f1();
// 3. const:
//      Is used to declare a constant variable
// declared a constant variable with intial constant value, using const keyword;
const fname = "Abishai Kashif";
// fname = "Ayesha Umar" // errror: Cannot assign to 'fname' because it is a constant.
// 4. this:
//      Is used to refers the current context of something.
// for Example :
// 'this' keyword in methods of an object refers to the object itself, when invoked through object.
console.log(person.learn("Typescript")); // output: Abishai
// this in standalone function refers to the global object
function f2() {
    // console.log(this); // refers to the global object
}
// context of 'this' keyword changes depending upon where it is
