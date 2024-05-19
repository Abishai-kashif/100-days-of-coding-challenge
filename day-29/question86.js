"use strict";
// Checking for Text Presence :     - Question 86
// this func checks if the text 'Javascript' exists in the given string
function findJS(str) {
    return str.includes("Javascript");
}
let str = "I love Javascript";
if (findJS(str)) {
    console.log("The Word 'Javascript' exist in the given string");
}
else {
    console.log("not found");
}
