/* ​ Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function divididoPorTres(numero){
    if(numero % 3 == 0){
        console.log(`O número ${numero} é divisível por 3`)
    }else{
        console.log(`O número ${numero} NÃO é divisível por 3`)
    }
}
divididoPorTres(6)
divididoPorTres(8)
divididoPorTres(33)
divididoPorTres(60)
divididoPorTres(77)
divididoPorTres(100)