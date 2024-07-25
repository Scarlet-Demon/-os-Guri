/*
Crie uma função chamada minutesToSeconds que aceite um número de minutos como parâmetro
e retorne o equivalente em segundos.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/
const prompt = require('prompt-sync')();
function  minutesToSeconds() {;
    let minutos = prompt('Qual o valor de minutos que gostaria de saber em segundos?');
    console.log(`${minutos} minuto(s) é ${minutos*60} segundos.`);
};
minutesToSeconds();
