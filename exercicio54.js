/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. */
function objetoParaArray(objeto) {
    return Object.entries(objeto)//O método entries() retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.
    }
console.log(objetoParaArray({nome: "Cachorro", raca: "Labrador"}))
console.log(objetoParaArray({id: 1, produto: "Chocolate", preco: 2.50}))