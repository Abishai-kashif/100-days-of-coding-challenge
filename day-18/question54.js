// Making a Objects keys flexible
// making a func that makes an object dynamically based on provided keys and values
function makeDynamicObject(keys, values) {
    if (keys.length === values.length) {
        var dynamicObj_1 = {};
        keys.forEach(function (key, idx) {
            dynamicObj_1[key] = values[idx];
        });
        return dynamicObj_1;
    }
    else {
        throw new Error("The number of keys and values are not equal");
    }
    ;
}
;
// invoking the function to make a dynamic object based on provided keys and values
var person = makeDynamicObject(["name", "age"], ["Abishai", 17]);
console.log(person);
// see the flexiblity of the function by passing in more keys and values
var student = makeDynamicObject(["fullName", "age", "education", "rollNumber"], ["Abishai Kashif", 17, "MSDS", 1453]);
console.log(student);
makeDynamicObject(["name", "age"], ["Abishai"]);
