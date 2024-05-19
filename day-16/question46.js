// Enhanced Laptop Object
var laptop = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2019,
    describe: function () { return console.log("This is a ".concat(laptop.make, " ").concat(laptop.model, " from ").concat(laptop.year, ".")); }
};
laptop.describe();
