// Знайти суму всіх цілих чисел від 1 до 15

let number = 1;
let summary = 0;

while (number <= 15) {
  summary = number + summary;
  number++;
}

console.log(summary);
