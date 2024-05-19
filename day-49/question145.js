// this function accepts a callback & invokes it with some arguments.
function formatYourName(yourName, customFormater) {
    return customFormater(yourName); // calling calback with arguments
}
var formatedName = formatYourName("abishai kashif", function (name) { return "MR, ".concat(name.charAt(0).toUpperCase() + name.slice(1), "."); });
console.log(formatedName); //output:  MR, Abishai kashif.
var formatedName2 = formatYourName("zia khan", function (name) { return "@".concat(name, "123."); });
console.log(formatedName2); //output:  @zia khan123.
// Demonstrate invoking callback with arguments to perform custom formating for a name.
