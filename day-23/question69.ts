// Deviding & Finding the Remainder :   - Question 69

//type for returned object with quotient & remainder
interface QuotientRemainder {
	quotient: number;
	remainder: number;
}

// defined a func that gets two numbers & returns an object with quotient & remainder
function quotientAndRemainder(
	dividend: number,
	divisor: number
): QuotientRemainder {
	// calculating the quotient & remainder
	const quotient = Math.floor(dividend / divisor);
	const remainder = dividend % divisor;

	// returning an object with quotient & remainder
	return { quotient, remainder };
}

// try with 5 & 2
console.log(quotientAndRemainder(5, 2)); // output: { quotient: 2, remainder: 1 }

// this program shows how many times 2 can be divided by 5 & whats leftover
