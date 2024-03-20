let input = require('fs').readFileSync('stdin', 'utf8');

let valores = input.split("\n")

let numero = parseFloat(valores.shift())

function descobreIntervalo(numero) {

    if (numero <= 25 && numero >= 0) {
        return `Intervalo [0,25]`
    }
    else if (numero > 25 && numero <= 50) {
        return `Intervalo (25,50]`
    }
    else if (numero > 50 && numero <= 100) {
        return `Intervalo (75,100]`
    }
    else
        return `Fora de intervalo`

}

console.log(descobreIntervalo(numero))