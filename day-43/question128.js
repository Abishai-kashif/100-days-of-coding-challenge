// this function takes unlimited amount nums as argument
// & returns their sum
var sum = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (total, current) { return (total += current); }, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6)); // output:21;
