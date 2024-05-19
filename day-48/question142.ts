// created a promise
let helloPromise = new Promise<string>((resolve, reject) => {
	// delay in execution of 2 sec
	setTimeout(() => {
		resolve("Hello, World!"); // resolving my promise after 2 secs.
	}, 2000);
});

helloPromise.then((res) => console.log(res)); // output: "Hello, World!" , after 2 secs
