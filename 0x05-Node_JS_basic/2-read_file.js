const fs = require('fs');

function countStudents(filePath) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const lines = fileData.trim().split('\n');
    let totalStudents = 0;
    let csStudentsList = [];
    let sweStudentsList = [];
    lines.forEach(line => {
      const [firstName, lastName, age, field] = line.split(',');
      if (firstName && lastName && age && field) {
        // Count the student
        totalStudents++;
        if (field.trim() === 'CS') {
          csStudentsList.push(firstName.trim());
        } else if (field.trim() === 'SWE') {
          sweStudentsList.push(firstName.trim());
        }
      }
    });
    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${csStudentsList.length}. List: ${csStudentsList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudentsList.length}. List: ${sweStudentsList.join(', ')}`);

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
