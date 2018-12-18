var numbers = [1, 3, 7, 4, 8];

console.log("This is some numbers comparison");

var result_one = 1 == 1;
console.log(`Comparison One = (1 == 1) =`, result_one);

var result_two = 1 == 3;
console.log(`Comparison Two = (1 == 3) =`, result_two);

var result_three = 1 == "1";
console.log(`Comparison Three = (1 == "1") =`, result_three);

var number5 = 5;
var array_comparison = [];

for (var i = 0; i < numbers.length; i++) {
  if (number5 > numbers[i]) array_comparison.push("Larger");
  else if (numbers[i] > number5) array_comparison.push("Smaller");
}
console.log(array_comparison);
