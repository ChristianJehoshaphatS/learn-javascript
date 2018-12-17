const word1 = "I";
const word2 = "Am";
const word3 = "Groot!";

console.log("Word One is     ", word1);
console.log("Word Two is     ", word2);
console.log("Word Three is   ", word3);

var sentence1 = word1 + " " + word2 + " " + word3;
console.log(sentence1, "     This is with    '' ");
console.log(`${word1} ${word2} ${word3}`, "     This is Without '' ");

var lower = sentence1.toLowerCase();
console.log("Lower Case from the Sentence = ", lower);

var upper = sentence1.toUpperCase();
console.log("Upper Case from the Sentence = ", upper);
