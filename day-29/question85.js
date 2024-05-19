"use strict";
// Finding the Position of Substrig :       - Question 85
// this func takes a string as an argument & returns the first ocurrance
// word 'code' in the given string
function findWordCode(str) {
    // finding the position of first occurrence of the substring named 'code'
    let position = str.indexOf("code");
    // if substring found or not
    if (position !== -1) {
        return `The position of the word 'code' in the given string: ${position}`;
    }
    else {
        return `The word 'code' not found (404) in the given string`;
    }
}
// sentence in which the first ocurrence of substring code starts from 0
let sentence = "code & code is life";
console.log(findWordCode(sentence)); // output: 0
