/* Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */
function classificarMes(mes){
    switch(mes){
        case 1:
            return "Janeiro"
        case 2: 
            return "Fevereiro"
        case 3:
            return "Março"
        case 4: 
            return "Abril"
        case 5: 
            return "Maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 8:
            return "Agosto"
        case 9: 
            return "Setembro"
        case 10: 
            return "Outubro"
        case 11: 
            return "Novembro"
        case 12:
            return "Dezembro"
        default:
            return "Mês inválido!"

    }
}
console.log(classificarMes(1))
console.log(classificarMes(2))
console.log(classificarMes(3))
console.log(classificarMes(4))
console.log(classificarMes(5))
console.log(classificarMes(6))
console.log(classificarMes(7))
console.log(classificarMes(8))
console.log(classificarMes(9))
console.log(classificarMes(10))
console.log(classificarMes(11))
console.log(classificarMes(12))
console.log(classificarMes(13))











