/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/
function calcular(numero1, numero2){
    console.log("Soma de " + numero1 + "+" + numero2 + " = " + (numero1 + numero2) )
    console.log("Subtração de " + numero1 + "-" + numero2 + " = " + (numero1 - numero2) )
    console.log("Multiplicação de " + numero1 + "*" + numero2 + " = " + (numero1 * numero2) )
    console.log("Divisão de " + numero1 + "/" + numero2 + " = " + (numero1 / numero2) )
}
calcular(4,4)