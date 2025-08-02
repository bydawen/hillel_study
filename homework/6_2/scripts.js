// Дано массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму і кількість додатних (положительных) елементів.
// Знайти мінімальний (найменший) елемент масива і його індекс.
// Знайти максимальний (найбільший) елемент масива та його індекс
// Визначити кількість від’ємних (отрицательных) елементів масива
// Знайти кількість непарних додатних елементів
// Знайти кількість парних додатних елементів
// Знайти суму парних додатних елементів
// Знайти суму непарних додатних елементів
// Знайти добуток всіх додатних елементів
// Змінити на 0 всі елементи масива окрім найбільшого

let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positiveSum = 0;
let positiveMulti = 1;

let positiveEvenSum = 0;
let positiveOddSum = 0;

let positiveCount = 0;
let negativeCount = 0;

let positiveOddCount = 0;
let positiveEvenCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positiveSum += arr[i];
    positiveCount += 1;
    positiveMulti *= arr[i];
  }

  if (arr[i] < 0) {
    negativeCount += 1;
  }

  if (arr[i] > 0 && (arr[i] % 2 !== 0))  {
    positiveOddCount += 1;
    positiveOddSum += arr[i];
  }

  if (arr[i] > 0 && (arr[i] % 2 === 0))  {
    positiveEvenCount += 1;
    positiveEvenSum += arr[i];
  }
}

document.write(`Сумма додатніх елементів =  ${positiveSum}, а їх кількість ${positiveCount} <br>`);
document.write(`Кількість від’ємних елементів = ${negativeCount} <br>`);
document.write(`Кількість непарних додатних елементів = ${positiveOddCount} <br>`);
document.write(`Кількість парних додатних елементів = ${positiveEvenCount} <br>`);
document.write(`Cума парних додатних елементів = ${positiveEvenSum} <br>`);
document.write(`Cума непарних додатних елементів = ${positiveOddSum} <br>`);
document.write(`Добуток всіх додатних елементів = ${positiveMulti} <br>`);
