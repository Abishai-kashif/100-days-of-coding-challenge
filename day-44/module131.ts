export class Student {
	name: string;
	age: number;
	rollNo: number;

	constructor(name: string, age: number, rollNo: number) {
		this.name = name;
		this.age = age;
		this.rollNo = rollNo;
	}

	getDetails() {
		return `Name: ${this.name}, Age: ${this.age}, RollNo ${this.rollNo}.`;
	}
}

// both are valid ways for classes
// export { Student }; // exporting the student class
