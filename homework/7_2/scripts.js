// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function currySum(a) {
  return function currySumItem(b) {
    return a * b;
  }
}

let checkResult = currySum(5)(2);
console.log(checkResult);
