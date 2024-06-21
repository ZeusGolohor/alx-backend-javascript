const fs = require('fs');

function countStudents(filePath) {
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const lines = fileData.trim().split('\n').filter(line => line.trim() !== '');
        let totalStudents = 0;
        let csStudentsList = [];
        let sweStudentsList = [];

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line) {
                const [firstName, lastName, age, field] = line.split(',');
                if (firstName && lastName && age && field) {
                    totalStudents++;
                    if (field.trim() === 'CS') {
                        csStudentsList.push(firstName.trim());
                    } else if (field.trim() === 'SWE') {
                        sweStudentsList.push(firstName.trim());
                    }
                }
            }
        }

        console.log(`Number of students: ${totalStudents}`);
        console.log(`Number of students in CS: ${csStudentsList.length}. List: ${csStudentsList.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudentsList.length}. List: ${sweStudentsList.join(', ')}`);

    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
