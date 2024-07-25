/*
Crie uma função chamada alphabeticalOrder que aceite uma string e retorne uma nova
string com as letras ordenadas em ordem alfabética.

Dica: Utilize o método split para converter a string em um array de caracteres.
Utilize o método sort para ordenar os caracteres. Utilize o método join para
juntar os caracteres em uma nova string.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/
const prompt = require('prompt-sync')()
let sort = []

function alphabeticalOrder(){
    let palavra = prompt('Digite uma palavra vou ordenar ela.').toLowerCase()
    let i = 0
    while(i<palavra.length){
        sort.push(palavra[i])
        i++
    }
    console.log(sort.sort())
}
alphabeticalOrder()