const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;
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
    const studentFields = header.slice(0, header.length - 1);

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const fields = line.split(',');
      const field = fields[fields.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const student = {};
      for (let j = 0; j < studentFields.length; j += 1) {
        student[studentFields[j].trim()] = fields[j].trim();
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

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  try {
    const report = await countStudents(DB_FILE);
    const responseParts = [`This is the list of our students\n${report}`];

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', Buffer.byteLength(responseParts.join('\n')));
    res.status(200).send(responseParts.join('\n'));
  } catch (err) {
    const errorResponse = `This is the list of our students\n${err.message}`;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', Buffer.byteLength(errorResponse));
    res.status(500).send(errorResponse);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
