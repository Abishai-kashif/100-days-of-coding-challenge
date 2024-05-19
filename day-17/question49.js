// function using rest Parameters
// making a func that takes unlimited amount of keyword arg using rest param.
var printHobby = function () {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    // loops through the hobbies & prints each hobby.
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby, "."));
    });
};
printHobby("coding", "computer", "fighting", "learning", "applying");
