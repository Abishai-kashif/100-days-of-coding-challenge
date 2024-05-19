"use strict";
// this function takes age and prints a message based on the age
let checkPhaseOfLife = (age) => {
    if (age < 2) {
        console.log("Person is a baby");
    }
    else if (age >= 2 && age < 4) {
        console.log("Person is a toddler");
    }
    else if (age >= 4 && age < 13) {
        console.log("Person is a kid");
    }
    else if (age >= 13 && age < 20) {
        console.log("Person is a teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log("Person is an adult");
    }
    else if (age >= 65) {
        console.log("Person is an elder");
    }
};
checkPhaseOfLife(1); // Person is a baby
checkPhaseOfLife(4); // Person is a kid
checkPhaseOfLife(13); // Person is a teenager
checkPhaseOfLife(20); // Person is an adult
checkPhaseOfLife(65); // Person is an elder
