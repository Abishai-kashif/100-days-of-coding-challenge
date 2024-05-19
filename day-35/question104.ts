import chalk from "chalk";

// Create a function that generate hexadecimal color code :
function getHexadecimalCode(): string {
	let codeList: string[] = [];

	// generate random codes 6 times & adding each code the codeList
	for (let i = 0; i <= 5; i++) {
		let code: string = "";
		// generating random number between 0, 15
		let randomNum: number = Math.round(Math.random() * 15);

		// if number is greater than 9
		switch (randomNum) {
			case 10:
				code = "a";
				break;
			case 11:
				code = "b";
				break;
			case 12:
				code = "c";
				break;
			case 13:
				code = "d";
				break;
			case 14:
				code = "e";
				break;
			case 15:
				code = "f";
				break;
			default:
				code = String(randomNum);
				break;
		}

		// appending the randomly generated number into array
		codeList.push(code);
	}

	// making the hexadecimal code from codeList
	let hexadecimalCode: string = codeList.reduce(
		(hexacode, code): any => hexacode + code,
		"#"
	);

	// returning the hexadecimalcode
	return hexadecimalCode;
}

// calling the function & logs the returned full hexa code
let randomColor = chalk.hex(getHexadecimalCode());
console.log(randomColor("color1"));

function getHexadecimalCode2() {
	const color =
		"#" +
		Math.floor(Math.random() * 0xffffff)
			.toString(16)
			.padStart(6, "0");
	return color;
}

let randomColor2 = chalk.hex(getHexadecimalCode2());
console.log(randomColor2("color2"));
