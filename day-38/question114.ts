// Iterate over the Map of Student Ids & names:

// seting up Student Map
const student = new Map<string, string>();

student.set("Name", "Abishai Kashif");
student.set("Id", "1453");

// iterating over each pair key & val & logs each of them
student.forEach((val, key) => {
	console.log(`${key} : ${val}`);
});
