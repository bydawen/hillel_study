// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
// Створіть метод об'єкту для отримання та відображення цих даних.

'use strict'

let users = {
  name: "John",
  age: 35,
  origin: "United State",
  email: "example@gmail.com",
  phone: +1234567890,
  bankId: "312 456 789",

  viewUserInfo() {
    for (let key in users) {
      if (typeof users[key] !== "function") {
        console.log(`${key}: ${users[key]}`);
      }
    }
  }
};

users.viewUserInfo();


const keys = Object.keys(users);
const values = Object.values(users);
const entries = Object.entries(users);

console.log(keys, values, entries);
