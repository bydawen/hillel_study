// Practice 1
let number1 = parseInt(prompt("Введіть перше число"));
let number2 = parseInt(prompt("Введіть друге число"));

if (number1 > number2) {
  console.log("Перше число більше за друге");
} else if (number2 > number1) {
  console.log("Друге число більше за перше");
} else {
  console.log("Числа однакові");
}
// END

// Practice 2
let foot = Number(prompt("Введіть фут")*0.305);
let km = Number(prompt("Введіть кілометр")*1000);

console.log(foot, `Стільки ${foot} метрів, у футах`);
console.log(km, `Стільки ${km} метрів, у кілометрі`);

if (foot < km) {
  console.log(`Ця відстань ${foot}м менша - вона у футах`);
} else if (km < foot) {
  console.log(`Ця відстань ${km}м менша - вона у км`);
} else {
  console.log(`Ця відстань ${foot} та ця ${km} - зараз однакові!`);
}
// END

// Practice 3
let a = prompt("Введіть число №1");
let b = prompt("Введіть число №2");

if (a > b) {
  if (a % b === 0) {
    console.log(`${b} є дільником ${a}`)
  } else {
    console.log(`${b} НЕ є дільником ${a} !!!`)
  }
} else {
  if (b % a === 0) {
    console.log(`${a} є дільником ${b}`)
  } else {
    console.log(`${a} НЕ є дільником ${b} !!!`)
  }
}
// END

// Practice 4
let number = prompt("Введіть число");
let numberCheck = number % 10;

console.log(numberCheck % 2 === 0 ? "число парне" : "число непарне");
console.log(numberCheck, "остання цифра числа");
// END

// Practice 5
let twoDigits = Number(prompt("Введіть двозначне число!"));
console.log(`Користувач ввів таке число - ${twoDigits}`);

if (twoDigits >= 10 && twoDigits <= 99) {
  let rightSplit = twoDigits % 10;
  let leftSplit = Math.floor(twoDigits / 10);

  if (leftSplit > rightSplit) {
    console.log(`Перша цифра числа = ${leftSplit} і вона більша за другу цифру числа`);
  } else if (rightSplit > leftSplit) {
    console.log(`Друга цифра числа = ${rightSplit} і вона більша за першу цифру числа`);
  } else if (leftSplit === rightSplit) {
    console.log(`Перша цифра числа = ${leftSplit} та друга цифра числа ${rightSplit} - однакові!!!`);
  }
} else {
  alert(`Користувач ввів не двозначне число!`);
}
// END

// Practice 6
let threeDigits = Number(prompt("Введіть тризначне число!"));
if (threeDigits >= 100 && threeDigits <= 999) {
  let rightSplit = threeDigits % 10;
  let middleSplit = Math.floor((threeDigits % 100) / 10);
  let leftSplit = Math.floor(threeDigits / 100);

  let numbersSum  = rightSplit + middleSplit + leftSplit;
  let checkTimes100  = rightSplit * middleSplit * leftSplit;
  let checkEquals = rightSplit === middleSplit && middleSplit === leftSplit;
  let checkSomeEquals = rightSplit === middleSplit || middleSplit === leftSplit || rightSplit === leftSplit;

  if (numbersSum % 2 === 0) {
    console.log(`Сума цифр ${numbersSum} - парна!`);
  } else {
    console.log(`Сума цифр ${numbersSum} НЕ парна!!!`);
  }

  if (numbersSum % 5 === 0) {
    console.log(`Сума цифр ${numbersSum} - кратна 5!`);
  } else {
    console.log(`Сума цифр ${numbersSum} НЕ кратна 5!!!`);
  }

  if (checkTimes100 > 100) {
    console.log(`Добуток цифр = ${checkTimes100}  і є більшим за 100 !`);
  } else {
    console.log(`Добуток цифр = ${checkTimes100} є МЕНЬШИМ за 100 !!!`);
  }

  if (checkEquals) {
    console.log(`Всі цифри у ${threeDigits} - однакові !`)
  } else {
    console.log(`Всі цифри у ${threeDigits} - НЕ однакові !!!`)
  }

  if (checkSomeEquals) {
    console.log(`У ${threeDigits} - є однакові числа!`)
  } else {
    console.log(`У ${threeDigits} - НЕМАЄ однакових чисел!`)
  }

} else {
  alert(`Користувач ввів не тризначне число!`);
}
// END

// Practice 7
let sixDigits = Number(prompt("Введіть шестизначне число!"));
if (sixDigits >= 100000 && sixDigits <= 999999) {
  let number1 = Math.floor(sixDigits / 100000);
  let number2 = Math.floor((sixDigits % 100000) / 10000);
  let number3 = Math.floor((sixDigits % 10000) / 1000);
  let number4 = Math.floor((sixDigits % 1000) / 100);
  let number5 = Math.floor((sixDigits % 100) / 10);
  let number6 = Math.floor(sixDigits % 10);

  if (number1 === number6 && number2 === number5 && number3 === number4) {
    console.log(`Число ${sixDigits} - дзеркальне !`);
  } else {
    console.log(`Число ${sixDigits} - НЕ дзеркальне !!!`);
  }
} else {
  alert(`Користувач ввів не шестизначне число!!!`);
}
// END
