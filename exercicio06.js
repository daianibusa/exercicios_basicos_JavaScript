/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

// Função para calcular juros simples 
function calcularJurosSimples(capital, taxa, prazo){
    let montante = (capital * (1 + (taxa/100) * prazo))
    let juros = (capital * (taxa/100) * prazo)
    console.log("O montante no regime de juros simples é = " + montante.toFixed(2).toString().replace('.',','))
    console.log("O total de juros simples é = " + juros.toFixed(2).toString().replace('.',','))
    
}
calcularJurosSimples(1200,2,15)

// Função para calcular juros compostos 
function calcularJurosCompostos(capital, taxa, prazo){
    let montante = (capital * (1 + (taxa/100)) ** prazo)
    let juros = (montante - capital)
    console.log("O montante no regime de juros compostos é = " + montante.toFixed(2).toString().replace('.',','))
    console.log("O total de juros compostos é = " + juros.toFixed(2).toString().replace('.',','))
}
calcularJurosCompostos(1200,2,15)