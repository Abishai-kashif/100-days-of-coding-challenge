"use strict";
// Updating Object properties :        - Question `80`
Object.defineProperty(exports, "__esModule", { value: true });
// Creating car object
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
};
// adding new property to car obj
car["color"] = "red";
// updating existing property
car.year = 2021;
// Printing car object to show the changes
console.log("Car: " + JSON.stringify(car));
