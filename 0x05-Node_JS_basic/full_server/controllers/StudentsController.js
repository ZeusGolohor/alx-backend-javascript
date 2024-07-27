const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) { // Using req/res for consistency
    readDatabase(process.argv[2].toString())
      .then((students) => {
        const studentList = [];
        studentList.push('This is the list of our students');
        const majors = Object.keys(students);
        majors.sort();
        for (let i = 0; i < majors.length; i += 1) {
          const major = majors[i];
          const studentsInMajor = students[major];
          studentList.push(
            `Number of students in ${major}: ${studentsInMajor.length}. List: ${studentsInMajor.join(', ')}`
          );
        }
        res.status(200).send(studentList.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    readDatabase(process.argv[2].toString())
      .then((students) => {
        if (!(major in students)) {
          res.status(500).send('Major parameter must be CS or SWE');
        } else {
          const studentsInMajor = students[major];
          res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
