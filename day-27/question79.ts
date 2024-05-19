// Creating & accessing Object properties :        - Question `79`

// defining type for car object
export interface Car {
	make: string;
	model: string;
	year: number;
}

// Creating car object
let car: Car = {
	make: "Toyota",
	model: "Camry",
	year: 2020,
};

// accessing object properties

console.log(car.model); // output: Camry
