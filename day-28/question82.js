// Finding Length of a String:      - Question 82
// this func takes String and return its length
// creating string variable
var str = "Abishai";
function getStringLength(str) {
    // getting length of string by using length property
    return str.length;
}
// calling the function
console.log("The Length of ".concat(str, " is ").concat(getStringLength(str))); // 7
