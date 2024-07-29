/*
Crie uma função chamada findMax que aceita um array de números e retorne
o maior número do array.

Programa desenvolvido por:
  - Gabriel
 - Igor
 - Nataly
 - Guilherme
*/

    function findMax(array) {
        // Verifica se o array está vazio e retorna 'undefined' ou um valor de erro apropriado
        if (array.length === 0) {
            return undefined; 
        }
        
        // Inicializa o máximo com o primeiro elemento do array
        let máximo = array[0];
        
        // Itera sobre o array para encontrar o maior número
        for (let i = 1; i < array.length; i++) {
            if (array[i] > máximo) {
                máximo = array[i];
            }
        }
        
        // Retorna o maior número encontrado
        return máximo;
    }
    
    // declarando array com os numeros e mostrando o maior no terminal
    const numeros = [3, 5, 7, 2, 8, 6];
    console.log("O maior numero é: ")
    console.log(findMax(numeros));
