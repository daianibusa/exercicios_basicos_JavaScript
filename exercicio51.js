/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array: */
function retornarElementos(elementos){
    const primeiroElemento = elementos.shift()//O método shift()remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. 
    const ultimoElemento = elementos.pop()//O método pop remove o último elemento de um array e retorna aquele valor.

return [primeiroElemento, ultimoElemento]
}
console.log(retornarElementos([1, 3, 4, 5]))
console.log(retornarElementos(["Cachorro", 3, 5, "Abelha", 6, "Gato"]))