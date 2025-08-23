// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let startNumber = 0;

for (let i = 1; i <= 500; i++) {
  startNumber = startNumber + i;
}

let average = startNumber / 500;
console.log(average);
