const names = ['Ana','Clara','Maria','Maria','João', 'João', 'João'];

// const mySet = new Set(names);

// const updatedNames = [...mySet];

// console.log(updatedNames);

//the code can even be shortened

const updatedNames = [...new Set(names)];

console.log(updatedNames);