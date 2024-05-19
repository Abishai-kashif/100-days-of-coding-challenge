// Find the Average Grade
// list of grades
var grades = [97, 85, 92]; // reduce method by default takes first element as pre(total ,acumulator)
// calculating the average
var avg = grades.reduce(function (pre, curr) { return pre + curr; }, 0) / grades.length;
// In reduce second param is initial value of pre(total ,acumulator)
console.log(avg); // logs the average of grades
