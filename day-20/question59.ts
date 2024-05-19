// Add a special Number



type adderType = (number: number) => number;

//defining a func that makes custom adders
function makeAdders(SpecificNumber: number): adderType {

    // this adder adding the specific number to any number we pass later
    return function adder(number: number) {
        return SpecificNumber + number;
    };
};


// making custom adder using makeAdders program 
let adder: adderType = makeAdders(5);


// using the custom adder to get the specicial number
console.log(adder(10)); // output: 15