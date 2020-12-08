/* Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá
ser de duas casas decimais, arredondando se necessário. */
function calcularAreaTriangulo(base, altura){
    const area = (base * altura) / 2

    return `A área do triângulo é = ${area.toFixed(2)}`
}
console.log(calcularAreaTriangulo(10,15))
console.log(calcularAreaTriangulo(5,5))
console.log(calcularAreaTriangulo(10,20))