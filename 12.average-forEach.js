const grades = [10, 6.5, 8, 7.5];

let sumOfGrades = 0;

//forEach has as a parameter a callback function to be executed for the elements of the array
grades.forEach(function (grade) {
    sumOfGrades += grade;
});

const average = sumOfGrades/grades.length;

console.log(`The average of the grades is ${average}.`);
//forEach can also add a index to the function
//Example:
//grades.forEach(function (grade, index) {
//    sumOfGrades += grade;
//    console.log(index);
//});
//This way you can also be dealing with the index at the same time you're dealing with the elements.
