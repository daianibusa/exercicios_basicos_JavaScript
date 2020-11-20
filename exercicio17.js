/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A     10%
B     15%
C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function calcularPlanoDeSalario(plano, salarioAtual){
    switch(plano){
        case "A":
            console.log(`O novo salário é = R$ ${salarioAtual + (salarioAtual * (10/100))}`)
            break
        case "B":
            console.log(`O novo salário é = R$ ${salarioAtual + (salarioAtual * (15/100))}`)
            break
        case "C":
            console.log(`O novo salário é = R$ ${salarioAtual + (salarioAtual * (20/100))}`)
            break
        default:
            console.log("Plano inválido!")
            break
    }
}
calcularPlanoDeSalario("A", 1000)
calcularPlanoDeSalario("B", 1000)
calcularPlanoDeSalario("C", 1000)
calcularPlanoDeSalario("D", 1000)


