/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
  - Gabriel
 - Igor
 - Nataly
 - Guilherme
*/

function greetUsers(nomes) {
    // Itera sobre o array de nomes
    nomes.forEach(nome => {
        // Exibe uma saudação para cada nome
        console.log(`Olá, ${nome}!`);
    });
}


const listaNomes = ['Ana', 'João', 'Maria'];
greetUsers(listaNomes);
