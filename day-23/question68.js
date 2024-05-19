// Multiplying Decimal Numbers :    - Question 68
// writing a function that accept two decimal numbers and returns their product
function multiplyDecimals(decimal1, decimal2) {
    return Math.round(decimal1 * decimal2 * 100) / 100; // this aproach ensures that the result is rounded with 2 decimals places
}
console.log(multiplyDecimals(0.1, 0.2)); // output: 0.02
