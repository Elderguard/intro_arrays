const students = ['John', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// o slice irá incluir todos os valores dos índices a partir do 0 e ANTES DE o índice 10
//const sala1 = alunos.slice(0,10);
// o slice irá incluir todos os valores dos índices a partir do 10 até o final
//const sala2 = alunos.slice(10);
//o slice irá incluir todos os valores dos índices a partir do início e ANTES DE a metade
const class1 = students.slice(0,students.length/2);
//o slice irá incluir todos os valores dos índices a partir de a metade até o final
const class2 = students.slice(students.length/2);

console.log(class1);
console.log(class2);