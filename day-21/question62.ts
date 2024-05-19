// Making a Student Template:

// making interface for student,so that all students will have name,age and classes
interface Student {
	name: string;
	age: number;
	courses: string[];
}

// filling in the template making example student
const student: Student = {
	name: "Abishai",
	age: 17,
	courses: ["IT", "Maths", "Computer Science"],
};

// printing student
console.log(student);
// we are using the interface to make sure that all students will have name,age and list of courses properties
