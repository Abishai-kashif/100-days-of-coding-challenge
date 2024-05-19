"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    name;
    age;
    rollNo;
    constructor(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, RollNo ${this.rollNo}.`;
    }
}
exports.Student = Student;
// both are valid ways for classes
// export { Student }; // exporting the student class
