/*
Crie uma função chamada countVowels que aceite uma string e retorne o número
de vogais na string. As vogais que devem ser contadas são 'a', 'e', 'i',
'o', 'u' (tanto maiúsculas quanto minúsculas).

Dica: Você pode usar um conjunto de vogais para verificar se cada caractere da
string é uma vogal. Utilize um laço para percorrer (você pode usar uma função
chamada .length para saber o tamanho da string, e vowels.includes para ver
se o caracter faz parte da string) cada caractere da string e um contador
para contar quantas vezes uma vogal aparece.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

const prompt = require ('prompt-sync') ({sigint: true});

const palavra = prompt('Digite uma palavra: ').toLowerCase()

countVowels(palavra)


function countVowels(palavra) {
    let numeroVogais = 0
    for (let i = 0; i < palavra.length; i++) {
        if(palavra[i].includes('a') || palavra[i].includes('e')||palavra[i].includes('i')||palavra[i].includes('o')||palavra[i].includes('u')){
            numeroVogais++;
        }
    }
    console.log(numeroVogais);
}