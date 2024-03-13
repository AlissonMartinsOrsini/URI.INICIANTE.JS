var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split("\n")

var valor = parseFloat(valores.shift())

let nota100, nota50, nota20, nota10, nota5, nota2
let moeda1, moeda50, moeda25, moeda10, moeda5, moeda01

nota100 = Math.floor(valor / 100)
valor = valor % 100
nota50 = Math.floor(valor / 50)
valor = valor % 50
nota20 = Math.floor(valor / 20)
valor = valor % 20
nota10 = Math.floor(valor / 10)
valor = valor % 10
nota5 = Math.floor(valor / 5)
valor = valor % 5
nota2 = Math.floor(valor / 2)
valor = valor % 2

moeda1 = Math.floor(valor / 1)
valor = valor % 1
moeda50 = Math.floor(valor / 0.50)
valor = valor % 0.50
moeda25 = Math.floor(valor / 0.25)
valor = valor % 0.25
moeda10 = Math.floor(valor / 0.10)
valor = valor % 0.10
moeda5 = Math.floor(valor / 0.05)
valor = valor % 0.05
moeda01 = (valor / 0.01)
valor = valor % 0.01


let resultado = `NOTAS:
${nota100} nota(s) de R$ 100.00
${nota50} nota(s) de R$ 50.00
${nota20} nota(s) de R$ 20.00
${nota10} nota(s) de R$ 10.00
${nota5} nota(s) de R$ 5.00
${nota2} nota(s) de R$ 2.00
MOEDAS:
${moeda1} moeda(s) de R$ 1.00
${moeda50} moeda(s) de R$ 0.50
${moeda25} moeda(s) de R$ 0.25
${moeda10} moeda(s) de R$ 0.10
${moeda5} moeda(s) de R$ 0.05
${moeda01.toFixed(0)} moeda(s) de R$ 0.01`


console.log(resultado)