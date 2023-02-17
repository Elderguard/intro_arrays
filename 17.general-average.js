const jSClass = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const javaClass = [6, 5, 8, 9, 5, 6];

const pythonClass = [7, 3.5, 8, 9.5];

function averageCalculator(classGrades) {
    //                                       acc can also be used instead of accounter
    const sumOfGrades = classGrades.reduce((accounter, grade)=> accounter + grade, 0);
    //0 will be the initial value of the accounter
    const average = sumOfGrades / classGrades.length;

    return average;
}

console.log(`The average of grades of  jSClass is ${averageCalculator(jSClass)}`);
console.log(`The average of grades of  javaClass is ${averageCalculator(javaClass)}`);
console.log(`The average of grades of  pythonClass is ${averageCalculator(pythonClass)}`);