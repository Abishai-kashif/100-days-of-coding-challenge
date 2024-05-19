type Person = {
	name: string;
	age: number;
};

// created an object
const person: Person = {
	name: "Abishai",
	age: 17,
};

function getJsonString(obj: any): string {
	// the third arg in the JSON.stringify method is used to indent the returned JSON string
	return JSON.stringify(obj, null, 4); // putting an indent level as the third arg beutifies the output make it more readible
} // we want to pass the second arg so we just simply put 'null'

console.log(getJsonString(person));

// In this code snippet we learned how to indent the json string returned
// by the stringify method using its third arg
