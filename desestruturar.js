const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias [indice];
        return `${aluno} tem a media ${mediaAluno}`;
    } else {
        return 'Estudante não existe na lista';
    }
}

const nomeAluno = 'Ana';

console.log(exibeNomeENota(nomeAluno));
