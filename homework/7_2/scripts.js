// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

let userNumber_1;
let userNumber_2;

do {
  userNumber_1 = prompt("Введіть перше число");
} while (isNaN(userNumber_1) || userNumber_1 === '' || userNumber_1 === null);

do {
  userNumber_2 = prompt("Введіть друге число");
} while (isNaN(userNumber_2) || userNumber_2 === '' || userNumber_2 === null);

userNumber_1 = Number(userNumber_1);
userNumber_2 = Number(userNumber_2);

function currySum(a) {
  return function currySumItem(b) {
    return a * b;
  }
}

let checkResult = currySum(userNumber_1)(userNumber_2);
console.log( `Добуток двох чисел дорівнює ${checkResult}`);
