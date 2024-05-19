// Generating a Random Boolean
// this function will generate a random boolean
function getRandomBoolean() {
    return Math.random() > 0.5; // returns true if the random number is greater than 0.5 otherwise false
}
console.log(getRandomBoolean()); // output will be true or false
export {};
// by comparing a random number with 0.5,
// we effectively get a true or false value  randomly
