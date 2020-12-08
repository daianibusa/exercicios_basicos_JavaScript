/* Criar uma função que receba um array de números e retorne o menor número desse array. */
function retornarMenorNumero(numeros){
    return Math.min(...numeros)//Math.min retorna o menor número do array
}
console.log(retornarMenorNumero([1,2,3,-5,5,6]))