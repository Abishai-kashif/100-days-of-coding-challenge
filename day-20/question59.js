// Add a special Number
//defining a func that makes custom adders
function makeAdders(SpecificNumber) {
    // this adder adding the specific number to any number we pass later
    return function adder(number) {
        return SpecificNumber + number;
    };
}
;
// making custom adder using makeAdders program 
var adder = makeAdders(5);
// using the custom adder to get the specicial number
console.log(adder(10)); // output: 15
