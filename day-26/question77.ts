// Default Parameters :     - Question 77

// this function takes users name & prints greeting to him
function greetUser(userName: string = "Anonymous"): void {
	console.log(`Hello, ${userName}.`);
}

// calling function with user name
greetUser("Abishai"); // output: "hello, Abishai"

// if calls the function without user name the default value will be printed e.g Anonymous
greetUser(); // output: "Hello, Anonymous"
