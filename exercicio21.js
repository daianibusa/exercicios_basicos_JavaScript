/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 
4) conveniados acima de 60 anos pagam R$130 */

function calcularVadlorDoPlano(idade){
    let valorPago = 0
    if(idade <= 9){
      return valorPago = 100 + 80;
    }else if(idade >= 10 && idade <= 30){
      return valorPago = 100 + 50;
    }else if(idade >= 31 && idade <= 60 ){
      return valorPago = 100 + 95;
    }else{
       return valorPago = 100 + 130;
    }
}
console.log(calcularVadlorDoPlano(9))
console.log(calcularVadlorDoPlano(10))
console.log(calcularVadlorDoPlano(30))
console.log(calcularVadlorDoPlano(31))
console.log(calcularVadlorDoPlano(48))
console.log(calcularVadlorDoPlano(60))
console.log(calcularVadlorDoPlano(61))

