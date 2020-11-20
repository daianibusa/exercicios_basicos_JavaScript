/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function divisaoEResto(dividendo, divisor){
    let divisao = dividendo / divisor
    let restoDaDivisao = dividendo % divisor

    console.log("A divisão de " + dividendo + "/" + divisor + " = " + divisao)
    console.log("O resto da divisão de " + dividendo + "/" + divisor + " = " + restoDaDivisao)
}
divisaoEResto(5,5)