// Using Map to Get the Length of Each Word in an Array
// Array of words
var words = ["hello", "world", "this", "is", "great"];
// Map to get array of lengths of each word
var lengths = words.map(function (word) { return word.length; });
console.log(words); // ['hello', 'world', 'this', 'is', 'great']
console.log(lengths); // [5, 5, 4, 2, 5]
// this program will give the length of each word in an array
