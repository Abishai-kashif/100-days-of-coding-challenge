"use strict";
// Comparing two strings to check if they are identicle,
// ignoring case sensitiveness
// this function takes two strings & check either both strings are identical
function checkIdenticleStrings(str1, str2) {
    // comparing if both string are identicle while ignoring case sensititive
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(checkIdenticleStrings("abishai", "AbisHai")); // true
console.log(checkIdenticleStrings("abishai", "hitesh")); // false
// we make the strings lowercase to ensure that the comparison is case insensitive
