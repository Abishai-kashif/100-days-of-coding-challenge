"use strict";
// Date in DD-MM-YYYY Format:   -Question 97
// this function returns the current date in DD-MM-YYYY Format
function getformatedDate() {
    // making new date instance so we can access properties related to date & time
    let date = new Date();
    // getting date,month & year
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0"); // month from 0 to 11
    let year = date.getFullYear();
    // returning the date in DD-MM-YYYY Format
    return `${day}-${month}-${year}`;
}
// calling the function to get the formated date
console.log(`formated date: ${getformatedDate()};`);
