"use strict";
// program that tells if the number is divisible by both 2 & 3 :
// this function checks if the number is divisible by both 2 & 3 :
function bothTwoAndThree(num) {
    return num % 2 === 0 && num % 3 === 0;
}
if (bothTwoAndThree(24)) {
    console.log("the number is divisible by both 2 & 3");
}
else {
    console.log("the number is not divisible by both 2 & 3");
}
