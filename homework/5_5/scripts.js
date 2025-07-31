// Дано ціле число. З’ясувати, чи можна це число отримати шляхом возведення числа 3 в деяку ступінь.
// Наприклад, числа 9, 81 можно отримати, а 13 - ні

let userNumber = Number(prompt("Введіть ціле число"));
let userNumberCalc = userNumber;
let counter = 1;

while (counter < userNumberCalc) {
  counter = counter * 3;
}

if (counter === userNumberCalc) {
  document.write(`ТАК можна, це число <b>${userNumber}</b> <br> отримати шляхом возведення числа 3 в деяку ступінь!`);
} else {
  document.write(`це число <b>${userNumber}</b>  <br> НЕ можна отримати шляхом возведення числа 3 в деяку ступінь!`);
}
