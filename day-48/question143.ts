let promise = new Promise<string>((resolve, reject) => {
	let success: boolean = Math.random() > 0.5; // Randomly choose success or failure

	success ? resolve("success") : reject(new Error("Failure"));
});

promise
	.then((data) => console.log(data)) // .then() executes when promise is fullfilled, to handle success.
	.catch((err) => console.log(err.message)); // .catch() executes when promise is rejected,to handle failure.
