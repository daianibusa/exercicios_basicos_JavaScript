/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings. */ 
function maiorOuIgaul(numero1, numero2){
    if(numero1 >= numero2){
        return "O primeiro número é maior ou igual ao segundo"
    }else{ 
        return "O primeiro número não é maior ou igual ao segundo"
    }
}

console.log(maiorOuIgaul(8,7))
console.log(maiorOuIgaul(5,8))
console.log(maiorOuIgaul("9",8)) 

