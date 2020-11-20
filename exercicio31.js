/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */
function contarNumeros (vetor){
    let contador = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            contador++
        }
    }
    return contador
}
vetor = [1, 2, -1, 4, 3, -2, 6, -8, 0, -10, 11, -12, -13]
console.log(contarNumeros(vetor))