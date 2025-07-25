const booleanVar = true;
const numberVar = 9999;
const bigIntVar = 123n;
const stringVar = "Lorem ipsum dolor sit amet";
const undefinedVar = undefined;
const nullVar = null;
const objectVar = {
  name: "John",
  surname: "Doe",
  age: 42,
  human: true,
};
const arrayVar = [1, 2, 3];
const dateVar = new Date();
const symbolVar = Symbol("unique identifier");
const functionVar = function () {
  return "Some function string";
};

console.log(booleanVar, typeof booleanVar, "Boolean type");
console.log(numberVar, typeof numberVar, "Number type");
console.log(bigIntVar, typeof bigIntVar, "BigInt type");
console.log(stringVar, typeof stringVar, "String type");
console.log(undefinedVar, typeof undefinedVar, "Undefined type");
console.log(nullVar, typeof nullVar, "Null type"); // will be "object"
console.log(objectVar, typeof objectVar, "Object type");
console.log(arrayVar, typeof arrayVar, "Array type"); // will be "object"
console.log(dateVar, typeof dateVar, "Date type"); // will be "object"
console.log(symbolVar, typeof symbolVar, "Symbol type");
console.log(functionVar, typeof functionVar, "Function type"); // will be "function"