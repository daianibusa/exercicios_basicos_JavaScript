/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela. */
function contarPalvras(frase){
    const palavras = frase.split(" ")//split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.

    return palavras.length
}
console.log(contarPalvras("Estou aprendendo a programar."))
console.log(contarPalvras("Amo cachorros!"))