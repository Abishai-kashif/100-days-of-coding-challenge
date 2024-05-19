//this function simulates a rolling dice & returns a
// number between 1 to 6
function diceRoll(): number {
	return Math.ceil(Math.random() * 6);
}

// rolling a dice & logs the value dice return
console.log(diceRoll()); // output: integer between 1 to 6 like a dice

// Hence, we mimick the actions of rolling dice
// & getting a result.
