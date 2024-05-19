// checking if the map contain key named canada & logs the capital if exists
let countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("Canada", "Ottawa");
countries.set("USA", "Washington DC");
// this func checks if the map contains key named canada
function checkCanada(map) {
    map.has("Canada")
        ? console.log(`The Capital of Canada is: ${map.get("Canada")}`)
        : console.log("Canada is not in the countries");
}
checkCanada(countries);
countries.delete("Canada");
checkCanada(countries);
