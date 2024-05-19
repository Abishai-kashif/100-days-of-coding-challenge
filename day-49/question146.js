var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// example callback function
var filterEvenNums = function (num) { return num % 2 === 0; };
var filteredNumbers = numbers.filter(filterEvenNums);
console.log(filteredNumbers); // output: [ 2, 4, 6, 8, 10 ]
// demonstrate an example callback function that filter even numbers.
