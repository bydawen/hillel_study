// const counter = {
//   value: 0,
//   increment() {
//     // Здесь внутри вызвать setInterval с использованием стрелочной функции
//   }
// };
//
// Задание:
// Реализовать метод increment, который увеличивает value на 1 каждую секунду,
// используя стрелочную функцию внутри setInterval(придется погуглить этот метод) для сохранения контекста this.

const counter = {
  value: 0,
  increment() {
    setInterval(() => {
      this.value++;
      console.log(this.value);
    }, 1000);
  }
};

counter.increment();
