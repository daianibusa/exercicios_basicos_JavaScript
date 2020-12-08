/* Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais. */
function retornarConsoantes(frase){
    return frase.replace(/[aeiouáéíóúãê]/ig, "")
}
console.log(retornarConsoantes("Cachorro"))
console.log(retornarConsoantes("ÁRVORE"))
console.log(retornarConsoantes("CORAÇÃO"))
console.log(retornarConsoantes("emoção"))
console.log(retornarConsoantes("inteligência"))

