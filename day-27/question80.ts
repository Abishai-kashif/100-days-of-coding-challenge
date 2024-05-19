// Updating Object properties :        - Question `80`

import { Car } from "./question79";

// Creating car object
let car: Car = {
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
