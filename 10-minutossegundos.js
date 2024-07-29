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
function  minutesToSeconds() {;
    let minutos = prompt('Qual o valor de minutos que gostaria de saber em segundos?');
    console.log(`${minutos} minuto(s) é ${minutos*60} segundos.`);
};
minutesToSeconds();
