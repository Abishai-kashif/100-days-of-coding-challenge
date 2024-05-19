
//taking a simple function that cal the area of a rectangle
function calArea(length: number, width: number): number {
    return length * width;
};


//refactoring into a arrow function
let calAreaArrow =(length: number ,width: number): number => length * width;


//calling the refactored arrow function
console.log(calAreaArrow(5, 5)); 