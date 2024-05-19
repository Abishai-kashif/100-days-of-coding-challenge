// Error handling in TypeScript with Callbacks

function operateNumbers(
	callback: (err, num1, num2) => void,
	num1: any,
	num2: any
) {
	if (typeof num1 !== "number" || typeof num2 !== "number") {
		// handling error in callback by passing error as an argument
		return callback(
			new Error("Both arguments must be numbers."),
			null,
			null
		);
	} else {
		return callback(null, num1, num2);
	}
}

operateNumbers(
	(err, num1, num2) => {
		if (err instanceof Error) {
			console.log(err.message);
		} else {
			console.log(num1 + num2);
		}
	},
	2,
	2
);
