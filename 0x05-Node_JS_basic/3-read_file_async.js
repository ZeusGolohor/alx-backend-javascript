const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, fileData) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = fileData.trim().split('\n');
      let totalStudents = 0;
      let csStudents = [];
      let sweStudents = [];
      lines.forEach(line => {
        const [firstName, lastName, age, field] = line.split(',');
        if (firstName && lastName && age && field) {
          // Count the student
          totalStudents++;
          if (field.trim() === 'CS') {
            csStudents.push(firstName.trim());
          } else if (field.trim() === 'SWE') {
            sweStudents.push(firstName.trim());
          }
        }
      });
      console.log(`Number of students: ${totalStudents}`);
      console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
      resolve();
    });
  });
}

module.exports = countStudents;
