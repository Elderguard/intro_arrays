const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// o slice irá incluir todos os valores dos índices a partir do 0 e ANTES DE o índice 10
//const sala1 = alunos.slice(0,10);
// o slice irá incluir todos os valores dos índices a partir do 10 até o final
//const sala2 = alunos.slice(10);
//o slice irá incluir todos os valores dos índices a partir do início e ANTES DE a metade
const sala1 = alunos.slice(0,alunos.length/2);
//o slice irá incluir todos os valores dos índices a partir de a metade até o final
const sala2 = alunos.slice(alunos.length/2);

console.log(sala1);
console.log(sala2);