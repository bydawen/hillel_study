// Дан массив объектов с книгами:
//
//   const books = [
//     { title: "JS для начинающих", price: 500, genre: "programming" },
//     { title: "CSS в деталях", price: 300, genre: "design" },
//     { title: "React быстро", price: 800, genre: "programming" },
//   ];
//
// Задание:
//
// 1. С помощью filter выбрать только книги жанра "programming".
// 2. С помощью map получить массив только с названиями этих книг.
// 3. С помощью reduce посчитать общую стоимость выбранных книг.

const books = [
  { title: "JS для начинающих", price: 500, genre: "programming" },
  { title: "CSS в деталях", price: 300, genre: "design" },
  { title: "React быстро", price: 800, genre: "programming" },
];

let filterResult = books.filter(book => book.genre === "programming");
console.log(filterResult);

let mapResult = filterResult.map(book => book.title);
console.log(mapResult);

let reduceResult = filterResult.reduce((prevValue, book) => prevValue + book.price, 0);
console.log(reduceResult);

