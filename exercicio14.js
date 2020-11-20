/* Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

function escolherFruta(fruta){
    switch(fruta){
        case "Maçã":
            return "Não vendemos esta fruta aqui"
            break
        case "Kiwi":
            return "Estamos com escassez de kiwis"
            break
        case "Melancia":
            return "Aqui está, são R$ 3,00 o quilo"
            break
        default:
            return "Sinto muito, mas não temos essa fruta!"
            break

    }

}
console.log(escolherFruta("Maçã"))
console.log(escolherFruta("Kiwi"))
console.log(escolherFruta("Melancia"))
console.log(escolherFruta("Laranja"))
