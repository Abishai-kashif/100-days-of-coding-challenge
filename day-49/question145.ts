// this function accepts a callback & invokes it with some arguments.

function formatYourName(
	yourName: string,
	customFormater: (name: string) => string
): string {
	return customFormater(yourName); // calling calback with arguments
}

let formatedName: string = formatYourName(
	"abishai kashif",
	(name) => `MR, ${name.charAt(0).toUpperCase() + name.slice(1)}.`
);
console.log(formatedName); //output:  MR, Abishai kashif.

let formatedName2 = formatYourName("zia khan", (name) => `@${name}123.`);
console.log(formatedName2); //output:  @zia khan123.

// Demonstrate invoking callback with arguments to perform custom formating for a name.
