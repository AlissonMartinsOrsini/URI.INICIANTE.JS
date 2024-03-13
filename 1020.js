var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split("\n")

var dias = parseInt(valores.shift())


var anos = (parseInt(dias / 365))
dias = dias % 365
var meses = (parseInt(dias / 30))
dias = dias % 30

let resultado = `${anos} ano(s)
${meses} mes(es)
${dias} dia(s)`


console.log(resultado)