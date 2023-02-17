const students = ['Ana', 'Marcos','Maria','Mauro'];
const grades = [7, 4.5, 8, 7.5];

// const failed = students.filter((student, index)=>{
//     return grades[index] < 7;
//     //if the element is <7 it returns true
// })

// console.log(failed);

//Also, as the first parameter is not being used in the code, it's not necessary to be named
//As a convention the unnamed parameter will be replaced by _ 
const failed = students.filter((_, index)=>{
    return grades[index] < 7;
    //if the element is <7 it returns true
})

console.log(failed);