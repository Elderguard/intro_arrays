const grades = [7,7,8,9];

// const newGrades = grades;

// newGrades.push(10);

// console.log(`The new grades are ${newGrades}`);
// console.log(`The original grades are ${grades}`);
//if that attribution is made, any modification on the second array will also modify the original array
//also if modifying the original array, it will modify the newArray

const newGrades = [...grades,10];
// ... is the spread operator in javascript, instead of linking the arrays, it will spread the elements
//the push can also be added directly in the declaration of the newArray

console.log(`The new grades are ${newGrades}`);
console.log(`The original grades are ${grades}`);