var input = require('fs').readFileSync('stdin', 'utf8');

let valores = input.split("\n")

let A = parseInt(valores.shift())
let B = parseInt(valores.shift())
let soma = A + B
console.log("SOMA = " + soma)