/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */
function trocarValores(vetor1, vetor2){
    if (vetor1.length == vetor2.length) {
        for(let i = 0; i < vetor1.length; i++){
            vetor1[i] = vetor1[i] + vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor 1: ' + vetor1)
    console.log('Novo vetor 2: ' + vetor2)
}

let vetor1 = [10, 5, 3]
let vetor2 = [4, 6, 8]

trocarValores(vetor1, vetor2)
