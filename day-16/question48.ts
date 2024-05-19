// Combining Array with Spread Operator

let priceSets1: number[] = [25000 ,30000 ,35000];
let priceSets2: number[] = [100000 ,150000 ,15000];


let combinedPrices: number[] = [...priceSets1 ,...priceSets2].sort((a ,b) => a - b);// sort func sort in decending order by default
console.log(combinedPrices);
