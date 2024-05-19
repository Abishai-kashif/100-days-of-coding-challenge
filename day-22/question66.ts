// Logical AND Verification :

// writing a function that takes two booleans(true, false) & only say true if boths are true

function checkBothTrue(bool1: boolean, bool2: boolean): boolean {
	return bool1 && bool2;
}

console.log(checkBothTrue(true, false)); // this says false
console.log(checkBothTrue(true, true)); // this says true
