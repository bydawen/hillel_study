// const students = [
//   { name: "Аня", grades: [5, 4, 4, 5] },
//   { name: "Петя", grades: [3, 4, 4, 3] },
//   { name: "Ира", grades: [5, 5, 5, 5] },
// ];
//
// Задание:
//
// 1. Используя map и стрелочные функции, получить массив объектов с именем и средним баллом студента.
// 2. Отфильтровать тех, у кого средний балл меньше 4.5.

const students = [
  { name: "Аня", grades: [5, 4, 4, 5] },
  { name: "Петя", grades: [3, 4, 4, 3] },
  { name: "Ира", grades: [5, 5, 5, 5] },
];

let getGradesAverage = students.map(student => {
  let gradeAverage = student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length;

  return {
    name: student.name,
    average: gradeAverage,
  }
});
console.log(getGradesAverage);

let filterResult = getGradesAverage.filter(student => student.average < 4.5);
console.log(filterResult);
