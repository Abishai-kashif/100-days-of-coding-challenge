// Combining Array with Spread Operator
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var priceSets1 = [25000, 30000, 35000];
var priceSets2 = [100000, 150000, 15000];
var combinedPrices = __spreadArray(__spreadArray([], priceSets1, true), priceSets2, true).sort(function (a, b) { return a - b; }); // sort func sort in decending order by default
console.log(combinedPrices);
