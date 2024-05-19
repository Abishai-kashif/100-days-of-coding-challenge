// Checking if a Value is NaN:  -Question 90

// function takes value & checks if its NaN, if yes it returns true otherwise false
function isValueNaN(val: any): boolean {
	return Number.isNaN(val);
}

console.log(isValueNaN(100)); // output : false
console.log(isValueNaN(parseFloat("string"))); // output : true
console.log(isValueNaN(parseFloat("100"))); // output : true

// this program tells us how to know if the value that is intended to be a number
// is a number or not
