// using .filter to get the array of numbers that are greater than 10
// Array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// this program will give the array of numbers that are greater than 10
function greaterThanTen(nums) {
    return nums.filter(function (num) { return num > 10; });
}
// call the function & print the array of numbers that are greater than 10
console.log(greaterThanTen(numbers));
