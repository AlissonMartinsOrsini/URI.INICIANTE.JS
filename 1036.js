var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split("\n")

const valores = lines[0].split(' ')

function calcularRaiz(A, B, C) {
    const delta = B * B - 4 * A * C
    if (delta < 0 || A == 0) {
        return `Impossivel calcular`
    } else {
        const x1 = (-B + Math.sqrt(delta)) / (2 * A)
        const x2 = (-B - Math.sqrt(delta)) / (2 * A)
        return `R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`

    }
}
console.log(calcularRaiz(...valores))


