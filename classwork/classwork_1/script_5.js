// Знайти добуток всіх цілих чисел від 15 до 35

let number = 15;
let summary = 1;

while (number <= 35) {
  summary = number * summary;
  number++;
}

console.log(summary);
