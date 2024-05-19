// Determine if the given year is leap year using comparison operators :

// this function takes a year as input and returns
// true if the year is leap year else false

function isLeapYear(year: number): any {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2024));
