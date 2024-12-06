const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'Joao', 'Joao', 'Joao'];

// const nomesAtualizados = new Set(nomes);
// const listaAtualizados = [...nomesAtualizados];

const listaAtualizados = [...new Set(nomes)];

console.log(listaAtualizados);

