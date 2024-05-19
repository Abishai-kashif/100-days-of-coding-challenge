// Replace Item in an Array:  - Question 93

// array of names
let fruits: string[] = ["Banana", "Apple", "Mango"];

// this func find index & replace the item
function replaceBanana(arr: string[], newVal: string): void {
	let index = arr.indexOf("Banana"); // finding index of banana

	// ensure that index is not -1
	if (index === -1) return;

	arr[index] = newVal; // using index to replace the val to new val
}

// execute the function
replaceBanana(fruits, "Orange");

// print the updated array
console.log(fruits);
