var names = [
  "Mr. Iwin",
  "Mr. Yusuf",
  "Mrs. Dheta",
  "Mr. Panji",
  "Mr. Mas adi",
  "Mrs. Manda",
  "Mr. Arsyad",
  "Mr. Ipul",
  "Mr. Christian",
  "Mr. Gatot",
  "Mrs. Rina",
  "Mr. Fvrqan",
  "Mr. Gibran",
  "subrotot"
];

console.log(names);
console.log("Boys");

const result_mr = names.filter(mr => mr.includes("Mr. "));
console.log(result_mr);

console.log("Girls");

const result_mrs = names.filter(mrs => mrs.includes("Mrs. "));
console.log(result_mrs);

console.log("Gender Classification");
console.log("Fork way");
const male = result_mr.map(x => x + "(Male)");
console.log(male);

const female = result_mrs.map(x => x + "(Female)");
console.log(female);

console.log("Single process way");
const gender = names.map(x => {
  if (x.includes("Mr.")) {
    return x + "(Male)";
  } else if (x.includes("Mrs.")) {
    return x + "(Female)";
  } else {
    return x + "(Unknown)";
  }
});

console.log(gender);
console.log("Finding Specific data inside the Array");

const find = names.filter(mr => mr.includes("Mr. Gibran"));
console.log(find);

const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

console.log("Merging 2 Arrays");
let array_concat = names1.concat(names2);
console.log(array_concat);

console.log("Merging datas of an array to string");
let array_join = array_concat.join(", ");
console.log(array_join);

const names_1 = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mrs. Paula",
  7,
  22,
  "Mr. Hakim",
  true
];

console.log("Filtering various data inside an array");
const data_filter = check(names_1);

function check(input) {
  const aString = [];
  const anInteger = [];
  const aBoolean = [];

  input.forEach(data => {
    if (typeof data === "string") {
      aString.push(data);
    } else if (typeof data === "number") {
      anInteger.push(data);
    } else if (typeof data === "boolean") {
      aBoolean.push(data);
    } else {
      console.log("Neither a String, an Integer, nor a Boolean");
    }
  });
  console.log(aString);
  console.log(anInteger);
  console.log(aBoolean);
}

console.log("Filter: Accepting only string type data inside an array");
const string_filter = string_only(names_1);

function string_only(input) {
  const result = input.filter(data => {
    return typeof data === "string";
  });
  console.log(result);
}
