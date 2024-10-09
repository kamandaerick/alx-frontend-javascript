interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = function(
  firstName: string,
  lastName: string
) {
  return `${firstName[0]}. ${lastName}`
}

interface studentClassConstructor {
  firstName: string,
  lastName: string
}

interface studentClass {
  workOnHomework(): string
  displayName(): string
}

class Student implements studentClass {
  firstName: string;
  lastName: string;

  constructor({firstName, lastName}: studentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}