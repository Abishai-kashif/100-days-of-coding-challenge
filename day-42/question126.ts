const product = {
	name: "Hat",
	price: 10,

	outerMethod() {
		console.log(this.name); // works as expected

		const innerMethod = () => {
			console.log(this.name); // also works the same because arrow func inherits the value of 'this' from the enclosing scope
		};

		innerMethod();
	},
};

product.outerMethod();
