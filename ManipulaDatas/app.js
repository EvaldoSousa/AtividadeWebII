// app.js
const { calculateAge } = require('./dateUtils');

// Data de nascimento para teste
const dateOfBirth = '1990-08-15';

// Calcula a idade com base na data de nascimento
const age = calculateAge(dateOfBirth);

console.log(`Idade: ${age} anos`);
