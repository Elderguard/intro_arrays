const names = ['ana Julia', 'Caio vinicius', 'BIA Silva'];

//the names are not following a pattern, that's something that may happen when you get inputs typed by the user
//to correct it we need to overwrite the elements

// const namesPattern = names.map ((name)=>{
//     return name.toUpperCase();
// })

// console.log(namesPattern);

//Also, in the arrow functions you can return the value in a shorter code
//Removing the term return and the keys

const namesPattern = names.map ((name)=> name.toUpperCase());

console.log(namesPattern);
