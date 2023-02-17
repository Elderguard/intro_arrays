const names = ['Evaldo','Mary', "Camis"];

// names.forEach(function(name){
//     console.log(name);
// })
// //arrow function would also work
// names.forEach((name)=>{
//     console.log(name);
// })
// //or I can use the function externally

function printName(name){
    console.log(name);
}

names.forEach(printName);