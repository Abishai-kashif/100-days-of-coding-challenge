// Understanding let in Loops :     - Question 70
function logOneToFive() {
    // func that uses loop with let keyword
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
    // i = 3 : ERROR
}
// calling func to test if its prints numbers correctly
logOneToFive();
// Explaination: The loops variable "i" declared by let keyword will only visible
// inside loops body, outside the loops body loops variable "i" is invisible.
// thats how let keyword affects the loops variable visiblity.
