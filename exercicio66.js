/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas.*/
function inverterObjeto(objeto){
    const paresDeChaveValorInvertidos = Object.entries(objeto)//Object.entries() retorna um array cujos elementos são também arrays correspondentes aos pares de propriedades [key, value] enumeráveis encontrados diretamente sobre o objeto.
    .map( parChaveValor => parChaveValor.reverse() )//Objeto Map é um mapa simples de chave/valor.
return Object.fromEntries(paresDeChaveValorInvertidos)//fromEntries() transforma uma lista de pares chave-valor em um objeto
}
console.log(inverterObjeto({nome: "João", idade: 33, altura: 1.78}))