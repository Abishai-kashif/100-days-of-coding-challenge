"use strict";
// implementing try catch block
// if any error occurs in try block, catch block will be executed
try {
    console.log("Start");
    console.log(a); // not defined error
    console.log("End");
}
catch (error) {
    console.log("Error"); // handling that error
}
// if any error occurs in try block, catch block will be executed & will handle that error
// & the rest of the code will be executed
// this program tells us how to handle potential errors in the program
// while preventing the program from crashing in case of any error
