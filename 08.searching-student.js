const students = ["John", 'Juliana','Ana', 'Caio']
const grades = [10, 8, 7.5, 9];

const studentsAndGradesList = [students, grades];

function showsNameAndGrade(student) {
    if (studentsAndGradesList[0].includes(student)) {
        //console.log(`${student} is registered!`);
        // para facilitar a leitura, podemos separar os dados em variáveis específicas
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        // o mesmo efeito pode ser obtido com a seguinte forma
        const [students, averages] = studentsAndGradesList;

        const index = students.indexOf(student);

        const studentAverage = averages[index];

        console.log(`${student} has the average ${studentAverage}`);
    } else {
        console.log("Student not found!");
    }
}

showsNameAndGrade("Juliana");
