// const items = [
//   { name: "apple", quantity: 2, price: 30 },
//   { name: "banana", quantity: 5, price: 10 },
//   { name: "orange", quantity: 3, price: 20 },
// ];
//
// Задание:
//
// 1. С помощью map создать новый массив, где к каждому товару добавлено поле total = quantity * price.
// 2. С помощью reduce найти общую стоимость всех товаров.

const items = [
  { name: "apple", quantity: 2, price: 30 },
  { name: "banana", quantity: 5, price: 10 },
  { name: "orange", quantity: 3, price: 20 },
];

let itemsWithTotal = items.map(item => {
  return {
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    total: item.price * item.quantity,
  }
});
console.log(itemsWithTotal);

let totalItemsPrice = itemsWithTotal.reduce((sum, item) => {
  return sum + item.total;
}, 0);
console.log(totalItemsPrice);
