const { media, menor, maior } = require('./gradeUtils');

// Notas da turma para teste (substitua com as notas desejadas)
const notas = [8, 7, 9, 6, 8.5];

// Calcula a média das notas
const mediaDasNotas = media(notas);

// Encontra a menor nota
const menorNota = menor(notas);

// Encontra a maior nota
const maiorNota = maior(notas);

console.log(`Média das notas: ${mediaDasNotas}`);
console.log(`Menor nota: ${menorNota}`);
console.log(`Maior nota: ${maiorNota}`);
