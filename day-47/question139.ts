// LISTING OF FOUR RESERVED WORDS :

//      * interface
//      * function
//      * const
//      * this

// Valid use cases for each:

// 1. interface:
//          Is used to define type for shape(properties and methods) of an object.

// defining shape of the object using interface
interface Person {
	name: string;
	age: number;
	isMale: boolean;

	learn: (what: string) => string;
}

let person: Person = {
	name: "Abishai",
	age: 17,
	isMale: true,

	learn(what: string): string {
		return `Hi, my name is ${this.name} and I am learning ${what}.`;
	},
};

// 2.  function:
//          Is used to define an traditional function .

function f1(): void {
	console.log("Hello, World!");
}

f1();

// 3. const:
//      Is used to declare a constant variable

// declared a constant variable with intial constant value, using const keyword;
const fname: string = "Abishai Kashif";
// fname = "Ayesha Umar" // errror: Cannot assign to 'fname' because it is a constant.

// 4. this:
//      Is used to refers the current context of something.

// for Example :
// 'this' keyword in methods of an object refers to the object itself, when invoked through object.

console.log(person.learn("Typescript")); // output: Abishai

// this in standalone function refers to the global object
function f2(): void {
	// console.log(this); // refers to the global object
}

// context of 'this' keyword changes depending upon where it is
