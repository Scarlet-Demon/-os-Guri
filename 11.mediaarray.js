/*
Crie uma função chamada averageArray que aceite um array de números e retorne a média
dos números. Para esta função vocês devem pesquisar e entender como o método reduce
funciona.

Dica: Some todos os elementos do array e divida pela quantidade de elementos. Utilize o
método reduce para somar os elementos do array.

Programa desenvolvido por:
 - Gabriel
 - Igor
 - Nataly
 - Guilherme
*/
const prompt = require('prompt-sync')();
let numeros = [];

function pushArray(){
    let numero = parseFloat(prompt('Digite o número que gostaria somar:'));
    numeros.push(numero);
    let continua = prompt('Gostaria de continuar?(sim)(nao)').toLowerCase();
    switch(continua){
        case 'sim':
            pushArray();
            break;
        case 'nao':
            averageArray();
            break;
        default:
            console.log('Não entendi,vou continuar somando!!');
    };
};

function averageArray(){
    let soma = numeros.reduce((resultado, quantidade)=>{
        return (resultado+quantidade);
    },0);
    console.log(soma/numeros.length);
};
pushArray();
