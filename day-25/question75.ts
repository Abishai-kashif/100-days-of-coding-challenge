// Compound Assignment Operators :       - Question 75

// this func uses the compound assignment operators
function compoundAssignmentOperators() {
	// starting with variable x
	let x: number = 4;

	// performing series of operations on variable x using Compound Assignment Operators

	x += 2; // adding 2 to variable x & assigning it to variable x
	console.log(`After adding 2 to variable x : ${x}`);

	x -= 1; // subtracting 1 from variable x & assigning it to variable x
	console.log(`After subtracting 1 from variable x : ${x}`);

	x *= 3; // multiplying variable x by 3 & assigning it to variable x
	console.log(`After multiplying variable x by 3 : ${x}`);

	x /= 2; // dividing variable x by 2 & assigning it to variable x
	console.log(`After dividing variable x by 2 : ${x}`);
}

compoundAssignmentOperators();
