interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  location: 'Kenya',
}

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Daniel',
  age: 30,
  location: 'Japan',
}

let studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);
const headerRow = document.createElement('tr');
const nameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

nameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

studentList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});