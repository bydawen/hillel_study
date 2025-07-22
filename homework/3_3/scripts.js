const bigNumber = 10369;

console.log(
  Math.floor(bigNumber / 10000) % 10,
  Math.floor(bigNumber / 1000) % 10,
  Math.floor(bigNumber / 100) % 10,
  Math.floor(bigNumber / 10) % 10,
  bigNumber % 10
);

const wholeNumber = 10369;
const separateNumbers = String(wholeNumber).split('').join(' ');
console.log(separateNumbers, "Alternative method");
