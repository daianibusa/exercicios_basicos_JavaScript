/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */ 

function contarNumeros(numeros){
    let quantidadeDeNumerosNoIntervalo = 0
    let quantidadeDeNumerosForaDoIntervalo = 0

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] >= 10 && numeros[i] <= 20){
            quantidadeDeNumerosNoIntervalo++
        }else{
            quantidadeDeNumerosForaDoIntervalo++
        }
    }
    console.log(`Quantidade de números dentro do intervalo de 10 a 20 = ${quantidadeDeNumerosNoIntervalo}.
    Quantidade de números fora do intervalo de 10 a 20 = ${quantidadeDeNumerosForaDoIntervalo}`)          
}
numeros = [1,2,3,6,8,10,11,15,16,17,19,20,21,23,24]
contarNumeros(numeros)