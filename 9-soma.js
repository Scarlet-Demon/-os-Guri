/*
Crie uma função chamada sumTwoNumbers que aceite dois números como parâmetros e retorne
a soma deles.

Programa desenvolvido por:
  - Gabriel
 - Igor
 - Nataly
 - Guilherme
*/

const prompt = require ('prompt-sync') ({sigint: true});

let valor1 = prompt('Digite o primeiro valor: ');
let valor2 = prompt('Digite o segundo valor: ');
sumTwoNumbers(valor1, valor2)

function sumTwoNumbers(valor1, valor2){
     let resposta = parseInt(valor1) + parseInt(valor2);
    console.log(resposta);
}
