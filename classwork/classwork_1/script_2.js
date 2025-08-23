// Вивести на сторінку квадрати чисел від 10 до 20 через кому

let squareItem = 10;

do {
  let square = squareItem * squareItem;
  console.log(square + ",");
  squareItem++;
} while (squareItem <= 20);
