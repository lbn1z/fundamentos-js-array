const alunos = ['Ana', 'Marcos', 'Maria', 'Leonardo', 'Davi'];
const medias = [7, 4.5, 8, 10, 9];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;    
}); 

console.log(reprovados);
