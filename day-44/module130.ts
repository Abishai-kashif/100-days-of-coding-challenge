function greet(name: string): void {
	console.log(`Hello, ${name}.`);
}

// exporting the greet func defined in index.ts file
// using export keyword followed by the name of the
// function enclosed inside curly braces
export { greet };
