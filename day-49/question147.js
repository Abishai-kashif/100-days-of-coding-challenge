// Error handling in TypeScript with Callbacks
function operateNumbers(callback, num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        // handling error in callback by passing error as an argument
        return callback(new Error("Both arguments must be numbers."), null, null);
    }
    else {
        return callback(null, num1, num2);
    }
}
operateNumbers(function (err, num1, num2) {
    if (err instanceof Error) {
        console.log(err.message);
    }
    else {
        console.log(num1 + num2);
    }
}, 2, 2);
