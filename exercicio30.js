/* ​ Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */
function defineValor(vetorNumeros){
    let maior
    let menor

for (let i = 0; i < vetorNumeros.length; i++){
    if(maior === undefined && menor === undefined){
        maior = vetorNumeros[i]
        menor = vetorNumeros[i]
    }else{
        if(vetorNumeros[i] > maior){
            maior = vetorNumeros[i]
        }
        if(vetorNumeros[i] < menor){
            menor = vetorNumeros[i]
        }

    }
}
return [menor, maior]
}
vetorNumeros = [1,2,4,6,8,7,9,10,25,35,56,67,89,90]
console.log(defineValor(vetorNumeros))
