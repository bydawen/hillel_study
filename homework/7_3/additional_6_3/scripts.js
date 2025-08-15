// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array,4);
// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let itemNumber = Number(prompt("Який елемент масиву видалити?"))

let removeElement = (array, itemNumber) => {
  let index = array.indexOf(itemNumber);

  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

const result = removeElement(array, itemNumber);
console.log(result);
