// Compare let & const :    - Question 71
// example 1 :
// declaring variable using 'let'
var age = 17;
// reassignment
age = 18; // reassining the value is allowed coz the variable is declared with let
console.log(age); // logs :18
// example 2 :
// declaring constant variable using 'const'
var myName = "Abishai";
// try to reassign the variable declared by 'const'
try {
    myName = "Amaan"; // error
}
catch (e) {
    // catching the error
    console.log("Error :The variable is declared my const keyword.");
}
// this example illustrates that the variable declared by const will not update once is set
