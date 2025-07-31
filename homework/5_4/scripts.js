// Дано ціле число. З’ясувати, чи є воно простим
// Простим називається число, яке більше 1 та яке не має жодних інших дільників окрім 1 і самого себе). Наприклад, 5, 7, 13…

let userNumber = Number(prompt("Введіть ціле число"));
let isSimpleNumber = true;

if (userNumber <= 1) {
  alert("Введіть число більше 1 !!!")
} else {
  for (let i = 2; i <= userNumber -1; i++) {
    if (userNumber % i === 0) {
      isSimpleNumber = false;
      break;
    }
  }

  if (isSimpleNumber) {
    document.write("Число просте");
  } else {
    document.write("Число Не просте");
  }
}
