// Вивести суму тільки парних чисел в діапазоні від 30 до 80

let sum = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}

console.log(sum);
