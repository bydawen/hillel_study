let student1 = new Student("John", "Biden", 1991, [100, 95, 90, 92, 100]);
student1.studentPresent();
student1.studentPresent();
student1.studentPresent();
student1.studentPresent();
student1.studentPresent();

let student2 = new Student("Bob", "Marley", 1987, [95, 75, 84, 91, 94]);
student2.studentAbsent();
student2.studentPresent();

let student3 = new Student("Helen", "Scott", 2005, [40, 50, 60, 55, 45]);
student3.studentAbsent();
student3.studentAbsent();
student3.studentAbsent();

let student4 = new Student("Alice", "Johnson", 1999, [88, 92, 91, 87, 90]);
student4.studentPresent();
student4.studentPresent();
student4.studentAbsent();

viewStudentInfo(student1, student2, student3, student4);
