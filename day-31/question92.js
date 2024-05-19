// Remove Last Item from an Array:  - Question 92
// array of cars
var cars = ["BMW", "Fiat", "Audi"];
// this function removes the last item from the array
function removeLastItem(arr) {
    return arr.pop(); // removes the last item & returns it
}
// removing the last item of cars array
var car = removeLastItem(cars);
// prints the returned value
console.log(car);
// prints the updated array
console.log(cars);
