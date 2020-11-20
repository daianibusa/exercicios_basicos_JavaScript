/*​ Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function paresImpares(numeros){
    let quantidadePares = 0
    let quantidadeImpares = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0){
            quantidadePares++
        }else{
            quantidadeImpares++
        }
    }
    console.log(`${quantidadePares} números pares e ${quantidadeImpares} números ímpares`)
}
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
paresImpares(numeros)