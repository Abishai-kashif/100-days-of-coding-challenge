// Generate Random Integer between 1-10 :

function getRandomNum(): number {
	return Math.ceil(Math.random() * 10);
}

console.log(getRandomNum()); // the output is going to be any random num between 1-10

// this program uses Math.random to random num between 1-10 & Math.ceil to
// ensure that the number is going to int
