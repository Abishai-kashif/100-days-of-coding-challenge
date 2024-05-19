"use strict";
// date object is representation my next birthday
function getNextBirthday(month, day) {
    let today = new Date();
    // creating date object of birthday by given date
    let birthday = new Date(today.getFullYear(), month - 1, day);
    // but if the birthday has already happened this year
    if (birthday < today) {
        // birthday next year
        birthday = new Date(today.getFullYear() + 1, month - 1, day);
    }
    return birthday;
}
function getBirthdayDetails(birthday) {
    console.log(`Your next birthday is on: ${String(birthday.getDate()).padStart(2, "0")}-${String(birthday.getMonth() + 1).padStart(2, "0")}-${birthday.getFullYear()}`);
}
getBirthdayDetails(getNextBirthday(5, 23));
