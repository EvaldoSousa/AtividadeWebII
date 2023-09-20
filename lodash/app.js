const _ = require('lodash');

const numeros = [5, 3, 7, 2, 8, 3, 10, 5, 8];

// a. Ordene o array em ordem crescente.
const numerosOrdenados = _.sortBy(numeros);

// b. Remova os elementos duplicados do array.
const numerosUnicos = _.uniq(numeros);

// c. Filtrar e crie um novo array com apenas os números pares.
const numerosPares = _.filter(numeros, (numero) => numero % 2 === 0);

// d. Mapeie o array para criar um novo array com o dobro de cada número.
const numerosDobrados = _.map(numeros, (numero) => numero * 2);

// e. Calcule a soma de todos os elementos do array.
const somaDosNumeros = _.sum(numeros);

// Imprima os resultados no console.
console.log('Array original:', numeros);
console.log('Array ordenado:', numerosOrdenados);
console.log('Array sem duplicatas:', numerosUnicos);
console.log('Números pares:', numerosPares);
console.log('Números dobrados:', numerosDobrados);
console.log('Soma dos números:', somaDosNumeros);

