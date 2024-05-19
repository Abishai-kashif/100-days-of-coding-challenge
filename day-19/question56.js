// Keep only Strings
// items of mixed types
var mixedArray = ["Abishai", 17, true, "Kaksha", 25, false];
// filtering only words(string);
var stringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringArray);
