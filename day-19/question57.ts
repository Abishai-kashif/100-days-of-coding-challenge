// Find the Average Grade


// list of grades
let grades: number[] = [97 , 85 , 92];// reduce method by default takes first element as pre(total ,acumulator)


// calculating the average
let avg: number = grades.reduce((pre: number ,curr: number) => pre + curr ,0) / grades.length;
// In reduce second param is initial value of pre(total ,acumulator)


console.log(avg); // logs the average of grades