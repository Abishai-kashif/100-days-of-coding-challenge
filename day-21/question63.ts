// Shape Shifter :

type Shape = {
	kind: "circle" | "rectangle";

	radius?: number; // only for circle
	height?: number; // only for rectangle
	width?: number; // only for reactangle
};

// making shapes of circle or rectangle using shape type

const circle: Shape = {
	// making circle
	kind: "circle",

	radius: 5,
};

const reactangle: Shape = {
	// making rectangle

	kind: "rectangle",
	height: 10,
	width: 20,
};

console.log(circle); // logs circle
console.log(reactangle); // logs rectangle

//we makes a program that flexibly describe a shape of circle or rectangle in detail
