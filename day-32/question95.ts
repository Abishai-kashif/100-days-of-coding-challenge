// using .filter to get the array of numbers that are greater than 10

// Array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// this program will give the array of numbers that are greater than 10
function greaterThanTen(nums: number[]): number[] {
	return nums.filter((num) => num > 10);
}

// call the function & print the array of numbers that are greater than 10
console.log(greaterThanTen(numbers));
