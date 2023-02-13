const students = ["John", 'Juliana','Ana', 'Caio']
const grades = [10, 8, 7.5, 9];

const studentsAndGradesList = [students, grades];

let position = 1;

console.log(`The student ${position} in the student list is: ${studentsAndGradesList[0][position]} and his/her grade is ${studentsAndGradesList[1][position]}`);
