var product = {
    name: "Hat",
    price: 10,
    outerMethod: function () {
        var _this = this;
        console.log(this.name); // works as expected
        var innerMethod = function () {
            console.log(_this.name); // also works the same because arrow func inherits the value of 'this' from the enclosing scope
        };
        innerMethod();
    },
};
product.outerMethod();
