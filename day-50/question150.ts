// Syncronous Callback Example :
console.log("Before Synchronous Callback");

const nums = [1, 2, 3, 4];
console.log(nums.filter((num) => num % 2 == 0)); // filters methods callback is a sync callback

console.log("After Synchronous Callback"); // sync func blocks the execution of this code & runs itself first

// Asynchronous Callback Example :
console.log("Before Asynchronous Callback");

setTimeout(() => {
	console.log("Asyncronous Callback executed"); // did not block the flow of code
}, 2000);

console.log("After Asynchronous Callback");

// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
