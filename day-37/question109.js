"use strict";
// hecks the current hour and logs "Good Morning" if it's before 12 PM
function greeting() {
    let currHours = new Date().getHours();
    if (currHours < 12) {
        console.log("Good Morning");
    }
    else if (currHours < 18) {
        console.log("Good Afternoon");
    }
    else {
        console.log("Good Evening");
    }
}
greeting();
// simple check to greet user apropriately based on time of day
