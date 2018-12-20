console.log("Shape Areas and Volume Calculator");

let shape = {
  square: numA => {
    if (typeof numA === "number") return numA * numA;
    else return "One or more of the parameter(s) is/are not a number";
  },
  rectangle: (numA, numB) => {
    if (typeof numA === "number" && typeof numB === "number")
      return numA * numB;
    else return "One or more of the parameter(s) is/are not a number";
  },
  triangle: (numA, numB) => {
    if (typeof numA === "number" && typeof numB === "number")
      return (numA * numB) / 2;
    else return "One or more of the parameter(s) is/are not a number";
  },
  circle: numA => {
    if (typeof numA === "number") return numA * numA * 3.14159265359;
    else return "One or more of the parameter(s) is/are not a number";
  },
  trapezium: (numA, numB, numC) => {
    if (typeof numA === "number" && typeof numB === "number")
      return ((numA + numB) * numC) / 2;
    else return "One or more of the parameter(s) is/are not a number";
  }
};

console.log("Square");
console.log(shape.square(4));
console.log("Rectangle");
console.log(shape.rectangle(3, 7));
console.log("Triangle");
console.log(shape.triangle(8, 4));
console.log("Circle");
console.log(shape.circle(4, 2));
console.log("Trapezium");
console.log(shape.trapezium(14, 6, 3));
