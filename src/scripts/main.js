//1

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.admissionYear;
  }
}

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class Students {
  constructor(students) {
    this.students = [];

    for (let i = 0; i < students.length; i++) {
      this.students.push(
        new Student(
          studentsData[i].firstName,
          studentsData[i].lastName,
          studentsData[i].admissionYear,
          studentsData[i].courseName,
        ),
      );
    }
  }

  get getInfo() {
    const result = [];

    this.students.sort((a, b) => (a.admissionYear < b.admissionYear ? 1 : -1));

    for (let i = 0; i < this.students.length; i++) {
      result.push(
        this.students[i].fullName +
          ' - ' +
          this.students[i].courseName +
          ', ' +
          this.students[i].course,
      );
    }

    return result;
  }
}

const students = new Students(studentsData);

console.log(students.getInfo);
