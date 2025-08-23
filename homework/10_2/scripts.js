// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву,
// в якому лише парні числа з оригінального масиву.

'use strict'

let numbers = [12, 7, 9, 4, 18, 3, 20, 11, 6, 15, 22, 8, 5, 2, 17, 14, 13, 10, 1, 16];

let findEvenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(findEvenNumbers);
