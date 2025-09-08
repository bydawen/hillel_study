'use strict'

let text = document.querySelector('.text').textContent;

let tagsPattern = /#\S+/g;
let datesPattern = /\b\d{2}\.\d{2}\.\d{4}\b/g;
let linksPattern = /https:\/\/\S+/g;

let viewTags = text.match(tagsPattern);
let viewDates = text.match(datesPattern);
let viewLinks = text.match(linksPattern);

console.log(viewTags);
console.log(viewDates);
console.log(viewLinks);

let userName = prompt("Введіть імʼя");
let namePattern = /^\p{L}\S{2,14}$/u;
let checkName = userName.match(namePattern);

console.log(checkName ? `${userName} Імʼя валідне` : `${userName} Імʼя не валідне !!!`);

let userPassword = prompt("Введіть пароль");
let passwordPatternEasy = /^[\p{L}]+$/u;
let passwordPatternMedium = /^[\p{L}0-9]+$/u;
let passwordPatternHard = /^(?=.*\p{L})(?=.*\d)(?=.*[^\p{L}\d]).+$/u;

if (userPassword.match(passwordPatternEasy)) {
  console.log(`Це ${userPassword} - простий пароль (тільки літери)`);
} else if (userPassword.match(passwordPatternMedium)) {
  console.log(`Це ${userPassword} - середній пароль (тільки літери та цифри)`);
} else if (userPassword.match(passwordPatternHard)) {
  console.log(`Це ${userPassword} - складний пароль (літери, цифри, спецсимволи)`);
}
