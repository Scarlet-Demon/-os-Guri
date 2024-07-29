/*
Crie uma função chamada reverseString que aceite uma string como parâmetro
e retorne a string invertida. Por exemplo, se a entrada for "hello", a
função deve retornar "olleh".

Dica: Para inverter uma string, você pode usar os métodos split('')
para dividir a string em um array de caracteres, reverse() para
inverter o array e join('') para juntar os caracteres de volta em uma string.

Programa desenvolvido por:
  - Gabriel
 - Igor
 - Nataly
 - Guilherme
*/

function reverseString(string) {
    // Converte a string em um array de caracteres, inverte o array e depois junta os caracteres em uma nova string
    return string.split('').reverse().join('');
}


const texto = "hello";
console.log(reverseString(texto)); // Saída: "olleh"
