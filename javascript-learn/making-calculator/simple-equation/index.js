console.log("Equation Calculator");

let math = {
  add: (numA, numB) => {
    if (typeof numA === "number" && typeof numB === "number")
      return numA + numB;
    else return "One or more of the parameter(s) is/are not a number";
  },
  substract: (numA, numB) => {
    if (typeof numA === "number" && typeof numB === "number")
      return numA - numB;
    else return "One or more of the parameter(s) is/are not a number";
  },
  multiply: (numA, numB) => {
    if (typeof numA === "number" && typeof numB === "number")
      return numA * numB;
    else return "One or more of the parameter(s) is/are not a number";
  },
  divide: (numA, numB) => {
    if (typeof numA === "number" && typeof numB === "number")
      return numA / numB;
    else return "One or more of the parameter(s) is/are not a number";
  },
  square: (numA, numB) => {
    if (typeof numA === "number" && typeof numB === "number")
      return numA ** numB;
    else return "One or more of the parameter(s) is/are not a number";
  }
};

console.log("Addition");
console.log(math.add(13, 12));
console.log("Substraction");
console.log(math.substract(30, 5));
console.log("Multiply");
console.log(math.multiply(5, 5));
console.log("Divide");
console.log(math.divide(100, 4));
console.log("Square");
console.log(math.square(5, 2));
console.log("Combining some equations");
console.log(math.add(34, math.multiply(3, -3)));
console.log("Combining SOME MORE equations");
console.log(
  math.square(
    math.substract(math.divide(math.add(math.multiply(7, 2), 4), 3), 1),
    (math.divide(math.substract(math.multiply(3, 4)), 6), 2)
  )
);
