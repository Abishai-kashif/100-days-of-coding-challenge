// Iterate over the Map of Student Ids & names:
// seting up Student Map
const student = new Map();
student.set("Name", "Abishai Kashif");
student.set("Id", "1453");
student.forEach((val, key) => {
    console.log(`${key} : ${val}`);
});
