// Вам потрібно зробити конструктор сутності "Студент".
// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
// І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів.
// Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true,
// коли викликаємо .absent() - записується false.
// Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
// Масив – це властивість, present та absent – методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

function Student(name, surname, dateOfBirth, grades) {
  this.name = name;
  this.surname = surname;
  this.dateOfBirth = dateOfBirth;
  this.grades = grades;
  this.presence = new Array(25);

  this.studentAge = function () {
    let currentDate = new Date().getFullYear();
    return currentDate - this.dateOfBirth;
  };

  this.studentAverageGrade = function () {
    let average = this.grades.reduce((count, grade) => {
      return count + grade;
    }, 0);

    return average / this.grades.length;
  };

  this.studentPresent = function () {
    for (let i = 0; i < this.presence.length; i++) {
      if (this.presence[i] !== true) {
        this.presence[i] = true;
        return;
      }
    }

    if (!this.presence.includes(undefined)) {
      console.log("Усі 25 місць відвідуваності вже зайняті!");
    }
  };

  this.studentAbsent = function () {
    for (let i = 0; i < this.presence.length; i++) {
      if (this.presence[i] === undefined) {
        this.presence[i] = false;
        return;
      }
    }

    if (!this.presence.includes(undefined)) {
      console.log("Усі 25 місць відвідуваності вже зайняті!");
    }
  };

  this.studentSummary = function () {
    let summaryGrade = this.studentAverageGrade();
    let studentPresence = 0;
    let totalLessons = 0;
    let summaryPresence = 0;

    for (let i = 0; i < this.presence.length; i++) {
      if (this.presence[i] !== undefined) {
        totalLessons++;
        if (this.presence[i] === true) {
          studentPresence++;
        }
      }
    }

    summaryPresence = studentPresence / totalLessons;

    switch (true) {
      case summaryGrade > 90 && summaryPresence > 0.9:
        return "Молодець!";
      case summaryGrade > 90 || summaryPresence > 0.9:
        return "Добре, але можна краще";
      default:
        return "Редиска!";
    }
  };
}

function viewStudentInfo(...students) {
  for (let student of students) {
    document.write(`<p><b>${student.name} ${student.surname}</b></p>`);
    document.write(`<p>Вік: ${student.studentAge()}</p>`);
    document.write(`<p>Середній бал: ${student.studentAverageGrade()}</p>`);
    document.write(`<p>Summary: ${student.studentSummary()}</p>`);
    document.write("<hr>");
  }
}
