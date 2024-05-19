// Block scope with 'let' and 'const' :

// Demonstrating the block scope
{
	// declaring variable using let & const
	let var1: string = "I am visible inside the block";
	const var2: string = "I am visible inside the block";

	//showing both variables declared by 'let' & 'const' to ensures that the variables
	// are accessible inside block scope.
	console.log(var1);
	console.log(var2);
}

// trys to access variable outside the block scope
try {
	var1 = "I am not visible outside the block";
	var2 = "I am not visible outside the block";
} catch (error) {
	console.log(
		"Error: coz the variables declared inside the block scope are not accessible outside of it"
	);
}
