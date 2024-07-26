const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

async function countStudents(dataPath) {
  if (!dataPath) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const lines = data.trim().split('\n');
    const studentGroups = {};

    const header = lines[0].split(',');
    const studentPropNames = header.slice(0, header.length - 1);

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const fields = line.split(',');
      const field = fields[fields.length - 1];
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const student = {};
      for (let j = 0; j < studentPropNames.length; j += 1) {
        student[studentPropNames[j].trim()] = fields[j].trim();
      }
      studentGroups[field].push(student);
    }

    const reportParts = [];
    const totalStudents = lines.length - 1;
    reportParts.push(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(studentGroups)) {
      const studentList = students.map((student) => student.firstname).join(', ');
      reportParts.push(`Number of students in ${field}: ${students.length}. List: ${studentList}`);
    }

    return reportParts.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(DB_FILE)
      .then((report) => {
        res.end(report);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running and listening on http://${HOST}:${PORT}`);
});

module.exports = app;
