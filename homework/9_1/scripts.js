// Дізнатись суму всіх зарплат користувачів:
// Об'єкт може містити невідому кількість департаментів та співробітників

'use strict'

let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

let totalSalary = (company) => {
  if (Array.isArray(company)) {
    return company.reduce((accum, count) => {
      accum += count.salary;

      return accum;
    }, 0);
  } else {
    return Object.values(company).reduce((accum, objOrArray) => {
      return accum + totalSalary(objOrArray);
    }, 0);
  }
}

console.log(totalSalary(company));
