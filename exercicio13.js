/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function classificacaoDia(dia){
    switch(dia){
    case 1:
        return "É Domingo - Fim de semana"
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: 
        return "Dia útil"
    case 7:
        return "É Sábado - Fim de semana"
    default: 
        return "Dia inválido"
}
}

console.log(classificacaoDia(1));
console.log(classificacaoDia(2));
console.log(classificacaoDia(3));
console.log(classificacaoDia(4));
console.log(classificacaoDia(5));
console.log(classificacaoDia(6));
console.log(classificacaoDia(7));
console.log(classificacaoDia(8));
