var input = require('fs').readFileSync('stdin', 'utf8');

let valores = input.split("\n")

const PI = 3.14159

let raio = parseFloat(valores.shift())

let area = PI * Math.pow(raio, 2)

console.log("A=" + area.toFixed(4))