// camparing the traditional & arrow func inside an object
let traditionalvsArrowFunc = {
	// defining traditional method
	traditionalMethod(): void {
		console.log(this); // this refers to the object itself
	},

	// defining arrow method
	arrowMethod: (): void => console.log(this), // this in arrow did'nt bound to obj but to scope it defined in
};

// traditional functions have their own 'this' binding depending upon
// how they are called.
traditionalvsArrowFunc.traditionalMethod();

// arrow functions don't have their own 'this' binding intead
// they inherit its from the func there are enclosed in or
// they inherits its from the module scope behavior in node JS
// which provides the {} empty obj by default hence 'this'
traditionalvsArrowFunc.arrowMethod(); // {}

// this code snippet illustrates the difference in how 'this' is
// determined in traditional versus arrow function.
