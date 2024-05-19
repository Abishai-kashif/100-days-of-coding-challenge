"use strict";
// Iterating Over Object Properties :        - Question `81`
Object.defineProperty(exports, "__esModule", { value: true });
// sample object
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
};
// this function takes an object
function printObjectProps(obj) {
    // iterating over the object
    for (var key in obj) {
        // printing the key and value
        console.log("".concat(key, ": ").concat(obj[key]));
    }
}
// calling the function with car obj
printObjectProps(car);
