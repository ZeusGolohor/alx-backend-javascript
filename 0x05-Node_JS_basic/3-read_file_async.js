const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            totalStudents += 1;
            const fieldsArray = lines[i].toString().split(',');
            const firstname = fieldsArray[0].trim();
            const field = fieldsArray[3].trim();

            if (Object.prototype.hasOwnProperty.call(students, field)) {
              students[field].push(firstname);
            } else {
              students[field] = [firstname];
            }

            if (Object.prototype.hasOwnProperty.call(fields, field)) {
              fields[field] += 1;
            } else {
              fields[field] = 1;
            }
          }
        }
        const studentCount = totalStudents - 1;
        console.log(`Number of students: ${studentCount}`);
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
