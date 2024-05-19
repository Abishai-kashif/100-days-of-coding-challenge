// String in JSON format stores some data .
var data = '{"name": "Abishai", "age": 17}';
// try to use that data directly would be an error in TS.
// data.name      ERROR
// to use that data we have to parse that JSON string into TS object.
var parsedObject = JSON.parse(data); // JSON.parse method takes an JSON string & returns an TS compatible object
console.log(parsedObject.name); // works perfectly
// In this code snippet we learned how to parse an json string in TS object.
