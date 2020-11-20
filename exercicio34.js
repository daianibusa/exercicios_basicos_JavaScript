/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */
function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()//charAt() retorna o caractere especificado a partir de uma string.
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()//toLowerCase() retorna o valor da string original convertido para minúsculo
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cba'))
 console.log(verificacaoDeString('ABC', 'cba'))
 console.log(verificacaoDeString('Cachorro', 'GATO'))

     
