// const words = ["apple", "banana", "avocado", "blueberry", "apricot"];
//
// Задание:
//
// 1. С помощью filter оставить только слова, начинающиеся на букву "a".
// 2. С помощью reduce сгруппировать все слова по первой букве в объект, где ключ — буква, значение — массив слов.

const words = ["apple", "banana", "avocado", "blueberry", "apricot"];

let filterWords = words.filter(word => word[0] === "a");
console.log(filterWords);


