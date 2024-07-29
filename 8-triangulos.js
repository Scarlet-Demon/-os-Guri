/*
Crie uma função chamada drawTriangle que aceite um número n e desenhe um triângulo de
altura n no console usando asteriscos (*).

Dica: Utilize um laço de repetição para iterar desde 1 até n. Em cada iteração,
imprima uma linha com um número crescente de asteriscos, começando com 1 asterisco
na primeira linha e adicionando um asterisco a cada linha subsequente.
Você pode usar a função .repeat().

Programa desenvolvido por:
 - Guilherme Guimarães Szumski
 -
*/

const prompt = require ('prompt-sync') ({sigint: true});

const n = prompt('Digite o número: ');
drawTriangle(n)

function drawTriangle(n){
    let asterisco = '*';
    for (let i = 0; i < n; i++) {
        console.log(asterisco);
        asterisco += '*';
    }
}