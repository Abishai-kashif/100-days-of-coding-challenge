// this function takes unlimited amount nums as argument
// & returns their sum
const sum = (...nums: number[]) => {
	return nums.reduce((total, current) => (total += current), 0);
};

console.log(sum(1, 2, 3, 4, 5, 6)); // output:21;
