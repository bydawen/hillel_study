const currentYear = new Date().getFullYear();
let dateOfBirth = prompt("Введіть ваш рік народження!");
let userCity = prompt("У якому місті ви живете?");
let userSport = prompt("Ваш улюблений вид спорту??");

let userAge = currentYear - dateOfBirth;

let emptyDateOfBirth = '';
let emptyUserCity = '';
let emptyUserSport = '';

if (!dateOfBirth) {
  emptyDateOfBirth = "рік народження";
}

if (!userCity) {
  emptyUserCity = "місто";
}

if (!userSport) {
  emptyUserSport = "спорт";
}

if (userCity === "Київ" || userCity === "Вашингтон" || userCity === "Лондон") {
  userCity = `Ти живеш у столиці ${userCity}!`;
} else {
  userCity = `Ти живеш у місті ${userCity}!!`;
}

switch (userSport) {
  case "футбол":
    userSport = `${userSport}! Круто! Хочеш стати як Дієго Марадона?`
    break;
  case "бокс":
    userSport = `${userSport}! Круто! Хочеш стати як Мухаммед Алі??`
    break;
  case "баскетбол":
    userSport = `${userSport}! Круто! Хочеш стати як Леброн Джеймс???`
    break;
  default:
    userSport = `І любиш такий спорт ${userSport} !!`;
}

if (emptyDateOfBirth || emptyUserCity || emptyUserSport) {
  alert(`Шкода, що Ви не захотіли вказувати:\n${emptyDateOfBirth}\n${emptyUserCity}\n${emptyUserSport}`);
} else {
  alert(`Твій вік ${userAge}. ${userCity} ${userSport}`);
}
