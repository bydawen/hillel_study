// Створити і описати сутності Багатоквартирного будинку, квартири, мешканців
// Додати можливість створювати нові будинки на певну кількість квартир з певною кількістю мешканців
// Кількість квартир в будинку та мешканців в кожній квартирі задає користувач
// Реалізувати перевірку на пусті значення
// Квартири - це Map всередині будинку, а Мешканці - це Set в квартирі
// Реалізувати функціонал виводу даних по будинку після створення

'use strict'

class House {
  apartments = new Map();

  constructor(houseName) {
    this.houseName = houseName;
  }

  addApartment(obj) {
    this.apartments.set(obj.apartmentNumber, obj);
  }

  addPeopleToApartment(people) {
    const peopleInApartment = firstHouse.apartments.get(people.apartmentNumber);

    if (peopleInApartment) {
      peopleInApartment.addPeople(people);
    }
  }
}

class Apartment {
  constructor(apartmentNumber, roomsAmount, peopleAmount) {
    this.apartmentNumber = apartmentNumber;
    this.roomsAmount = roomsAmount;
    this.peopleAmount = new Set();
  }

  addPeople(people) {
    this.peopleAmount.add(people);
  }
}

class Person {
  constructor(name, apartmentNumber) {
    this.name = name;
    this.apartmentNumber = apartmentNumber;
  }
}

const firstHouse = new House("Будинок 1");
const firstHouseApartments = [
  new Apartment(1, 3),
  new Apartment(2, 2),
  new Apartment(3, 1),
  new Apartment(4, 2),
];
firstHouseApartments.forEach(apartment => {
  firstHouse.addApartment(apartment);
});
const firstHousePeople = [
  new Person("John Doe", 1),
  new Person("Bob Marley", 2),
  new Person("Donald Duck", 2),
  new Person("Sandra Bullock", 2),
];
firstHousePeople.forEach(people => {
  firstHouse.addPeopleToApartment(people);
});
console.log(firstHouse);

const secondHouse = new House("Будинок 2");
const secondHouseApartments = [
  new Apartment(1, 2),
  new Apartment(2, 1),
  new Apartment(3, 3),
];
secondHouseApartments.forEach(apartment => {
  secondHouse.addApartment(apartment);
});
const secondHousePeople = [
  new Person("Alice Wonderland", 1),
  new Person("Peter Parker", 1),
  new Person("Bruce Wayne", 3),
  new Person("Clark Kent", 3),
];
secondHousePeople.forEach(people => {
  secondHouse.addPeopleToApartment(people);
});
console.log(secondHouse);

const thirdHouse = new House("Будинок 3");
const thirdHouseApartments = [
  new Apartment(1, 4),
  new Apartment(2, 2),
  new Apartment(3, 1),
  new Apartment(4, 3),
  new Apartment(5, 2),
];
thirdHouseApartments.forEach(apartment => {
  thirdHouse.addApartment(apartment);
});
const thirdHousePeople = [
  new Person("Tony Stark", 1),
  new Person("Natasha Romanoff", 1),
  new Person("Steve Rogers", 2),
  new Person("Thor Odinson", 4),
  new Person("Loki Laufeyson", 5),
];
thirdHousePeople.forEach(people => {
  thirdHouse.addPeopleToApartment(people);
});
console.log(thirdHouse);
