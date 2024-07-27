const { readFile } = require('fs');

module.exports = function readStudentData(filePath) {
  const studentRecords = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.toString().split('\n');
        const dataLines = lines.slice(1);
        for (let i = 0; i < dataLines.length; i += 1) {
          if (dataLines[i]) {
            const fields = dataLines[i].toString().split(',');
            const studentId = fields[3];
            if (studentRecords.hasOwnProperty(studentId)) {
              studentRecords[studentId].push(fields[0]);
            } else {
              studentRecords[studentId] = [fields[0]];
            }
          }
        }
        resolve(studentRecords);
      }
    });
  });
};
