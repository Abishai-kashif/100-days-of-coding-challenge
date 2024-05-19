// Remove Last Item from an Array:  - Question 92

// array of cars
let cars: string[] = ["BMW", "Fiat", "Audi"];

// this function removes the last item from the array
function removeLastItem<T>(arr: T[]): T | undefined {
	return arr.pop(); // removes the last item & returns it
}

// removing the last item of cars array
let car: any = removeLastItem(cars);

// prints the returned value
console.log(car);
// prints the updated array
console.log(cars);
