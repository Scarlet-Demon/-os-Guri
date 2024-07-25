/*
Crie uma função chamada getEvenNumbers que aceite um array de números e
retorne um novo array contendo apenas os números pares do array original.

Dica: Para filtrar os números pares, você pode usar o operador módulo (%).
Um número é par se o resto da divisão desse número por 2 é zero (num % 2 === 0).
Tente utilizar o método filter para criar um novo array contendo apenas os
números que atendem a essa condição.

Programa desenvolvido por:
 - Gabriel
 - Igor
 - Nataly
 - Guilherme
*/

function getEvenNumbers(vetor) {
    let numerosPares = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            numerosPares.push(vetor[i])
        };
    };
    return numerosPares
};

// teste 
let numeros = [0, 1, 2, 3, 4, 5, 6]
console.log(numeros)
console.log(getEvenNumbers(numeros))