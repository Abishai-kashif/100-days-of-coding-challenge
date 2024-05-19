// Text in a String:      - Question 84
// this func takes sentence & replace all occurrance of Javascript with TypeScript
function textInString(sentence) {
    // replace all occurrance of Javascript with TypeScript using regex
    return sentence.replace(/JavaScript/g, "TypeScript");
}
var sentence = "I am learning JavaScript & JavaScript is great";
// calling the function passing sentence & printing new sentence
console.log(textInString(sentence));
