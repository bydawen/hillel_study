// Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [3, "Lorem ipsum dolor sit amet", 5, true, null, 10, undefined];

let getAverageOfNumbers = (array) =>  {
  let sum = 0;
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
      total++;
    }
  }

  let average = sum / total;

  return average;
}

const result = getAverageOfNumbers(arr);
console.log(result);
