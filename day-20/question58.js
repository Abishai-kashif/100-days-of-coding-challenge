// Average Score Calculator
// defining a simple func that takes unlimited amount of scores & cal their avg
function calScoresAvg() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    return scores.reduce(function (acumm, val) { return acumm + val; }, 0) / scores.length;
}
;
var avg = calScoresAvg(97, 85, 73, 92, 90); // passing some scores as arg
// logs the returned avg
console.log(avg);
