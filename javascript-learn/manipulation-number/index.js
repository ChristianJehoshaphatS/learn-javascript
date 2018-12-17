var number_a = 1;
var number_b = 3;
var number_c = -6;
console.log("Number A = 1");
console.log("Number B = 3");
console.log("Number C = -6");

console.log("Manipulation: Number");

var addition = number_a + number_b + number_c;

console.log("Addition");

console.log("Number A:", number_a);
console.log("Number B:", number_b);
console.log("Number C:", number_c);
console.log("Number A + B + C");
console.log(`Result = ${number_a} + ${number_b} + ${number_c} = ${addition}`);

var substraction = number_c - number_b - number_a;

console.log("Substraction");

console.log("Number A:", number_a);
console.log("Number B:", number_b);
console.log("Number C:", number_c);
console.log("Number C - B - A");
console.log(
  `Result = ${number_c} - ${number_b} - ${number_a} = ${substraction}`
);

var number_d = 9;
console.log("Introducing Number D = 9");

var multiplication = number_a * number_b * number_c * number_d;
console.log("Multiplication");

console.log("Number A:", number_a);
console.log("Number B:", number_b);
console.log("Number C:", number_c);
console.log("Number D:", number_d);
console.log("Number A * B * C * D");

console.log(
  `Result = ${number_a} * ${number_b} * ${number_c} * ${number_d} = ${multiplication} `
);

var division = number_d / (number_c / number_b) / number_a;
console.log("Division");

console.log("Number A:", number_a);
console.log("Number B:", number_b);
console.log("Number C:", number_c);
console.log("Number D:", number_d);
console.log("Number D / (C/B) A");

console.log(
  `Result = ${number_d} / ( ${number_c} / ${number_b}) / ${number_a} = ${division}`
);

var number_e = 14;
console.log("Introducing Number E = 14");

var modulo1 = number_e % number_d;
var modulo2 = number_e % number_c;
var modulo3 = number_d % number_c;
var modulo4 = number_c % number_b;

console.log(`Equation = ${number_e} % ${number_d}`);
console.log("Modulo One: ", modulo1);

console.log(`Equation = ${number_e} % ${number_c}`);
console.log("Modulo Two: ", modulo2);

console.log(`Equation = ${number_d} % ${number_c}`);
console.log("Modulo Three: ", modulo3);

console.log(`Equation = ${number_c} % ${number_b}`);
console.log("Modulo Four: ", modulo4);

var array_integer = [1, 3, -6, 9, 14];
console.log("Introducing an Array of Integer", array_integer);

var array_integer_equation =
  ((((array_integer[1] + array_integer[3]) * array_integer[2]) %
    array_integer[4]) *
    array_integer[2]) /
  array_integer[1];
console.log(
  `Equation = (${array_integer[1]} + ${array_integer[3]}) * ${
    array_integer[2]
  } % ${array_integer[4]} * ${array_integer[2]} / ${
    array_integer[1]
  } = ${array_integer_equation}`
);

var array_string = ["a", "l", "f", "i", "n", "e"];
console.log("Introducing an Array of String", array_string);
var array_string_equation =
  array_string[2] +
  array_string[3] +
  array_string[4] +
  array_string[0] +
  array_string[1] +
  array_string[5];
console.log(
  `Equation = ${array_string[2]} + ${array_string[3]} + ${array_string[4]} + ${
    array_string[0]
  } + ${array_string[1]} + ${array_string[5]} = ${array_string_equation}`
);

var array_combine = ["a", 5, "f", 7, 11];
console.log(
  "Introducing a Combination Array of Integer and String",
  array_combine
);
var array_combine_equation =
  array_combine[2] +
  array_combine[0] +
  array_combine[1] +
  array_combine[3] +
  array_combine[0] +
  array_combine[4];
console.log(
  `Equation = ${array_combine[2]} + ${array_combine[0]} + ${
    array_combine[1]
  } + ${array_combine[3]} + ${array_combine[0]} + ${
    array_combine[4]
  } = ${array_combine_equation}`
);
