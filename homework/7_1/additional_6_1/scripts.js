// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])'
// поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let userString = prompt("Введіть рядок");
let userSplice = prompt("Які символи хочете прибрати?");
let symbolsRemove = userSplice.replace(/\s+/g, "");

function removeLetters(userString, letters) {
  let removeResult = "";

  for (let i = 0; i < userString.length; i++) {
    let symbols = userString[i];

    if (!letters.includes(symbols)) {
      removeResult += symbols;
    }
  }

  return removeResult;
}

let result = removeLetters(userString, symbolsRemove);
console.log(result);
