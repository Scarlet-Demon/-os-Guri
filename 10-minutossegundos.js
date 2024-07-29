/*
Crie uma função chamada minutesToSeconds que aceite um número de minutos como parâmetro
e retorne o equivalente em segundos.

Programa desenvolvido por:
 - Gabriel
 - Igor
 - Nataly
 - Guilherme
*/
const prompt = require('prompt-sync')();
let minutos = prompt('Qual o valor de minutos que gostaria de saber em segundos?');
function  minutesToSeconds(minutos) {;
    return(`${minutos} minuto(s) é ${minutos*60} segundos.`);
};
console.log(minutesToSeconds(minutos));
