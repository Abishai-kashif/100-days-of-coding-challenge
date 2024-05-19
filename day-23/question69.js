// Deviding & Finding the Remainder :   - Question 69
// defined a func that gets two numbers & returns an object with quotient & remainder
function quotientAndRemainder(dividend, divisor) {
    // calculating the quotient & remainder
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    // returning an object with quotient & remainder
    return { quotient: quotient, remainder: remainder };
}
// try with 5 & 2
console.log(quotientAndRemainder(5, 2)); // output: { quotient: 2, remainder: 1 }
// this program shows how many times 2 can be divided by 5 & whats leftover
