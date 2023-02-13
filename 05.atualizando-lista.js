const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// EXEMPLO 1: O comando splice irá "recortar" para unir com um novo grupo
//nomes.splice(1, 2);
//nomes.push("Rodrigo");

//console.log(nomes);

//seguindo o código acima, o resultado será
//[ 'João', 'Lara', 'Marjorie', 'Leo', 'Rodrigo' ]

// EXEMPLO 2: O comando splice irá "recortar os índices informados e incluirá o novo valor no mesmo lugar da lista"

nomes.splice(1, 2, "Rodrigo");


console.log(nomes);