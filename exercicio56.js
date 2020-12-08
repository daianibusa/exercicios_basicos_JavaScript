/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */
function retornarSoma(numeros){
    let soma = 0
    numeros.forEach(numero => soma += numero)
return soma
}
console.log(retornarSoma([1,3,6,8]))