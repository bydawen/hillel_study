let threeDigits = Number(prompt("Введіть тризначне число!"));
if (threeDigits >= 100 && threeDigits <= 999) {
  let rightSplit = threeDigits % 10;
  let middleSplit = Math.floor((threeDigits % 100) / 10);
  let leftSplit = Math.floor(threeDigits / 100);

  let checkEquals = rightSplit === middleSplit && middleSplit === leftSplit;
  let checkSomeEquals = rightSplit === middleSplit || middleSplit === leftSplit || rightSplit === leftSplit;

  if (checkEquals) {
    console.log(`Всі цифри у ${threeDigits} - однакові !`)
  } else {
    console.log(`Всі цифри у ${threeDigits} - НЕ однакові !!!`)
  }

  if (checkSomeEquals) {
    console.log(`У ${threeDigits} - є однакові цифри!`)
  } else {
    console.log(`У ${threeDigits} - НЕМАЄ однакових цифр!`)
  }

} else {
  alert(`Користувач ввів не тризначне число!`);
}