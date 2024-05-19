"use strict";
// Checking if a Value is NaN:  -Question 90
// function takes value & checks if its NaN, if yes it returns true otherwise false
function checkNaN(val) {
    return Number.isNaN(val);
}
console.log(checkNaN(100)); // output : false
console.log(checkNaN(parseFloat("string"))); // output : true
console.log(checkNaN(parseFloat("100"))); // output : true
