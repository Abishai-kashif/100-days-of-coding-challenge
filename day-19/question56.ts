// Keep only Strings


// items of mixed types
let mixedArray: any[] = ["Abishai" ,17 ,true ,"Kaksha" ,25 ,false];


// filtering only words(string);
let stringArray: string[] = mixedArray.filter((item: any) => typeof item === "string"); //filter func adds that item in a filtered list,for whcih item its callback returns true.if false drop

console.log(stringArray);   // logs the filtered array
