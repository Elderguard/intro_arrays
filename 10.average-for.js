const grades = [10, 6.5, 8, 7.5];

let sumOfGrades = 0;

for (let i=0; i<grades.length; i++){
    sumOfGrades += grades[i];
}

const average = sumOfGrades/grades.length;

console.log(`The average of the grades is ${average}.`);