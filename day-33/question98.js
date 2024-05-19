"use strict";
// Calculating days left until New Year:    -Question 98
// to get the days left until new year,we have to follow the following steps:
// 1. get the current date
// 2. get the new year date
// 3. calculate the difference between both dates in miliseconds
// 4. convert the difference in days
function daysUntilNewYear() {
    // getting dates
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // 1st January of next year
    // calculating the difference between two Dates, but in milliseconds
    const difference = newYear.getTime() - today.getTime();
    // converting milliseconds into days
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear());
