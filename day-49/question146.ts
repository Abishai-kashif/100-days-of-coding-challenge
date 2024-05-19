let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// example callback function
let filterEvenNums = (num) => num % 2 === 0;

let filteredNumbers: number[] = numbers.filter(filterEvenNums);
console.log(filteredNumbers); // output: [ 2, 4, 6, 8, 10 ]

// demonstrate an example callback function that filter even numbers.
