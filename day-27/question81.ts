// Iterating Over Object Properties :        - Question `81`

import { Car } from "./question79";

// sample object
let car: Car = {
	make: "Toyota",
	model: "Camry",
	year: 2020,
};

// this function takes an object
function printObjectProps(obj: object): void {
	// iterating over the object
	for (let key in obj) {
		// printing the key and value
		console.log(`${key}: ${obj[key]}`);
	}
}

// calling the function with car obj
printObjectProps(car);
