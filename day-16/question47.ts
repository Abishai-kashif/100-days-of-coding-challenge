// Advance Array Destructuring


//array of objects
let laptops: {make: string; model: string; year: number}[] = [
    {make: "Apple", model: "MacBook Pro", year: 2019},
    {make: "Dell", model: "XPS 13", year: 2020},
    {make: "HP", model: "Envy 13", year: 2018}
];

let [laptop1 ,laptop2] = laptops; // array destructuring assignment

console.log(laptop1);
console.log(laptop2);

