const grades = [10, 9.5, 8, 7, 6];

//map also receives a callback function
// grades.map((grade)=>{
//     return grade+1;
// })
//this will not overwrite the elements as the map doesn't have this function

// const updatedGrades = grades.map((grade)=>{
//     return grade+1;
// })

// console.log(updatedGrades);
//with the code above it will work on updating the grades, but there will be a grade above 10.

const updatedGrades = grades.map((grade)=>{
    return grade+1>=10? 10 : grade+1;
})

console.log(updatedGrades);