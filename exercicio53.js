/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro */
function retornarNumeros(array){
    return array.filter(item => typeof item === "number")
}

console.log(retornarNumeros([1, "Cachorro", 3, "Gato", 5]))