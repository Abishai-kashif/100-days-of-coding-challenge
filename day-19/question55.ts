// Double Numbers in an Array

// list of numbers
let numbers: number[] = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];


// map func takes each number from numbers doubles it & put it into a new array
let doubledNumbers: number[] = numbers.map((number: number) => number * 2);


console.log(doubledNumbers);   // logs the doubled numbers array
