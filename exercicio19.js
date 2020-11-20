/* ​ O cardápio de uma lanchonete é o seguinte:
Código  Descrição do Produto    Preço
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function calcularPedido(codigoProduto, quantidade){
    switch(codigoProduto){
        case 100:
            console.log(`O valor total do seu Cachorro Quente é = R$ ${quantidade * 3}`)
            break
        case 200:
            console.log(`O valor total do seu Hambúrguer Simples é = R$ ${quantidade * 4}`)
            break
        case 300:
            console.log(`O valor total do seu Cheeseburguer é = R$ ${quantidade * 5.50}`)
            break
        case 400:
            console.log(`O valor total do seu Bauru é = R$ ${quantidade * 7.50}`)
            break
        case 500:
            console.log(`O valor total do seu Refrigerante é = R$ ${quantidade * 3.50}`)
            break
        case 600:
            console.log(`O valor total do seu Suco é = R$ ${quantidade * 2}`)
            break
        default:
            console.log("Não temos este produto!")
    }
}
calcularPedido(100,3)
calcularPedido(200,3)
calcularPedido(300,3)
calcularPedido(400,3)
calcularPedido(500,3)
calcularPedido(600,3)
calcularPedido(700,3)
