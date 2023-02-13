const alunos = ["João", 'Juliana','Ana', 'Caio']
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado!`);
        // para facilitar a leitura, podemos separar os dados em variáveis específicas
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        // o mesmo efeito pode ser obtido com a seguinte forma
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Juliana");
