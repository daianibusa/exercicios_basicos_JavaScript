/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */ 
vetorInteiros = [1, 2, 3, 4]
vetorString = ["Amor", "Saúde", "Esperança", "Alegria" ]
vetorDouble = [1.2, 3.4, 5.6, 6.8]

function unirVetores (...args){
  
    resultado = []
    for(let i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])// arguments diz respeito a um objeto tipo array
}
return resultado
}
console.log(unirVetores(vetorInteiros, vetorDouble))
console.log(unirVetores(vetorInteiros, vetorString))
console.log(unirVetores(vetorDouble, vetorString))