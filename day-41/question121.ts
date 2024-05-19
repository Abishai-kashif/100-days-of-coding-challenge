// implemented a for loop that prints all numbers from 1 to 10 except 5 using continue statement

for (let i = 1; i <= 10; i++) {
	if (i === 5) continue; // skiping the rest of the loop for i = 5
	console.log(i); // logs 1-4 and 6-10
}
