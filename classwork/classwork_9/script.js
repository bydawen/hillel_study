'use strict'

// Використовуйте reduce, щоб створити об’єкт:
// { Alice: 2, Bob: 2, Charlie: 1 }.
let usersOrder = orders.reduce((accum, count) => {
  let userName = count.user;

  if (!accum[userName]) {
    accum[userName] = 0;
  }

  accum[userName] += 1;

  return accum;
}, {});
// console.log(usersOrder);
// END

// Використовуйте Map:
// Замість об’єкту використовуємо Map, де ключ - ім’я користувача, а значення - кількість його замовлень
// Map { 'Alice' => 2, 'Bob' => 2, 'Charlie' => 1 }
let usersOrdersMap = orders.reduce((accum, count) => {
  let userName = count.user;

  if (!accum.has(userName)) {
    accum.set(userName, 0);
  }

  accum.set(userName, accum.get(userName) + 1);

  return accum;

}, new Map());
// console.log(usersOrdersMap);
// END


// Використати map + reduce, щоб створити об’єкт
// { Alice: 620, Bob: 1700, Charlie: 300 }.
let usersOrdersPrice = orders.map((user) => {
  let userName = user.user;

  let userItemsPrice = user.items.reduce((sum, item) => {
    sum += item.price;

    return sum;
  }, 0);

  return {
    userName,
    userItemsPrice
  };
});
// console.log(usersOrdersPrice);

let usersOrdersPriceReducer = usersOrdersPrice.reduce((accum, count) => {
  let userName = count.userName;
  let userSum = count.userItemsPrice;

  if (!accum[userName]) {
    accum[userName] = 0;
  }

  accum[userName] += userSum;

  return accum;

}, {});
// console.log(usersOrdersPriceReducer);
// END

// Використовуємо Map, де ключ - им’я користувача, а значення - сума його покупок
// Map { 'Alice' => 620, 'Bob' => 1700, 'Charlie' => 300 }
let usersOrdersSumMap = orders.reduce((accum, count) => {
  let userName = count.user;

  let userItemsPrice = count.items.reduce((sum, item) => {
    sum += item.price;

    return sum;
  }, 0);

  if (!accum.has(userName)) {
    accum.set(userName, 0);
  }

  accum.set(userName, accum.get(userName) + userItemsPrice);

  return accum;

}, new Map());
// console.log(usersOrdersSumMap);
// END

// Створюємо Set, щоб отримати унікальні товари
// Set { 'Phone', 'Case', 'Laptop', 'Headphones', 'Monitor' }
let uniqueItems = () => {
  let uniqueList = new Set();

  orders.forEach(order => {
    order.items.forEach(orderItem => {
      uniqueList.add(orderItem.name);
    });
  });

  return uniqueList;
}

// console.log(uniqueItems());
// END

// Використовуйте reduce, щоб знайти користувача з найбільшими витратами.
// "Bob витратив більше за всіх: $1700"
let userMaxSpent = usersOrdersPrice.reduce((accum, current) => {
  if (current.userItemsPrice > accum.userItemsPrice ) {
    return current;
  } else {
    return accum;
  }
}, { username: "", userItemsPrice: 0 });

// console.log(`${userMaxSpent.userName} витратив більше за всіх: $${userMaxSpent.userItemsPrice}`);
// END
