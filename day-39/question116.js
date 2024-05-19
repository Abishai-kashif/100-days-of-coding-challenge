"use strict";
// this function logs the season based on month
function logSeason(month) {
    switch (month) {
        case 1:
        case 2:
        case 3:
            console.log("spring");
            break;
        case 4:
        case 5:
        case 6:
            console.log("summer");
            break;
        case 7:
        case 8:
        case 9:
            console.log("autumn");
            break;
        case 10:
        case 11:
        case 12:
            console.log("winter");
            break;
        default:
            console.log("Invalid month");
    }
}
logSeason(1); // spring
logSeason(3); // spring
logSeason(9); // autumn
logSeason(12); // winter
logSeason(20); // months are only 12 hence, default executed
// multiple cases shares same block of code to
// represent each season
