const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach (media => somaDasNotas += media);

// notas.forEach(function (nota) {
//    somaDasNotas += nota;
// })

// const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${somaDasNotas}`);
