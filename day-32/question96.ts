// Using reduce method to get the sum of an array

// Array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to get the sum of an array
function getSum(nums: number[]): number {
	return nums.reduce((total, current) => total + current, 0); // calculate the sum
}

// call the function & print the sum of the array
console.log(getSum(numbers));
