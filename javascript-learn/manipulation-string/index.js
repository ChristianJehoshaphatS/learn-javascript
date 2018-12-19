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

var sentence2 = "i am groot!!";
var string_split = sentence2.split(" ");

console.log(string_split);

function title_case(string) {
  let input = string;
  let split = input.split(" ");

  if (split.lenght > 0) {
    let first_alphabet = input[0].charAt(0);
  }
  let lower = input.slice(1);
  let first_alphabet = input.charAt(0);
  let upper = first_alphabet.toUpperCase();
  let construct = upper + lower;
  console.log(construct);
}

title_case("hallo");
title_case("bagus bagus");
