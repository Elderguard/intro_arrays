const names = ["John", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// EXAMPLE 1: command splice will "join" the data.
//names.splice(1, 2);
//names.push("Rodrigo");

//console.log(names);

//with the code above, the result will be
//[ 'John', 'Lara', 'Marjorie', 'Leo', 'Rodrigo' ]

// EXAMPLE 2: command splice will "join" the informed indexes and include the new value on the same spot in the list

names.splice(1, 2, "Rodrigo");


console.log(names);