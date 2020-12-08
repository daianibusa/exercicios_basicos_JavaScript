/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas. */
function calcularDespesas(despesas){
    let total = 0
    for(let despesa of despesas)
        total += despesa.preco

    return total
}
console.log(calcularDespesas([{nome: "Spotify", categoria: "Entretenimento", preco: 16.90},
{nome: "Plano de saúde", categoria: "Sáude", preco: 100},
{nome: "Cursos", categoria: "Educação", preco: 29.90}]))
