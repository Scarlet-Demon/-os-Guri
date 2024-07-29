/*
Crie uma função chamada alphabeticalOrder que aceite uma string e retorne uma nova
string com as letras ordenadas em ordem alfabética.

Dica: Utilize o método split para converter a string em um array de caracteres.
Utilize o método sort para ordenar os caracteres. Utilize o método join para
juntar os caracteres em uma nova string.

Programa desenvolvido por:
 - Gabriel
 - Igor
 - Nataly
 - Guilherme
*/
const prompt = require('prompt-sync')()

let palavra = []

function alphabeticalOrder(palavra){
    palavra = prompt('Digite uma palavra vou ordenar ela.').toLowerCase().split('').sort()
    return palavra
}
console.log(alphabeticalOrder(palavra))
