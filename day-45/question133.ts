type Person = {
	name: string;
	age: number;
};

// created an object
const person: Person = {
	name: "Abishai",
	age: 17,
};

// this function takes an object as argument & return JSON String

function getJsonString(obj: any): string {
	// JSON.stringify method takes an object as argument & returns
	// a string of it in the JSON format;
	return JSON.stringify(obj);
}

console.log(getJsonString(person));

// in this code snippet we learn how to convert an object into json string
