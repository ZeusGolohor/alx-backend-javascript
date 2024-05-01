export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'Zeus',
  lastName: 'Testerson',
  age: 25,
  location: 'Nigeria',
};

const student2: Student = {
  firstName: 'Testerson',
  lastName: 'Zeus',
  age: 25,
  location: 'Nigeria',
};

export const renderTable = (studentsList: Array<Student>): void =>  {

  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
