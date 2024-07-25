/*
Crie uma função chamada isPrime que aceite um número e retorne true se o
número for primo e false caso contrário.

Dica: Um número primo é um número maior que 1 que não tem divisores positivos
além de 1 e ele mesmo. Para verificar se um número é primo, você pode testar
se ele é divisível por qualquer número entre 2 e a raiz quadrada do número.
Você pode usar a função sqrt() da biblioteca Math para calcular isso.

Programa desenvolvido por:
 - Gabriel
 - Igor
 - Nataly
 - Guilherme
*/
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 2 || num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i < num.length; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

//test
console.log(isPrime(128)) 