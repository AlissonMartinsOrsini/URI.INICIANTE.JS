var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split("\n")

var segundos = parseInt(valores.shift())


var horas = (parseInt(segundos / 3600))
segundos = segundos % 3600
var minutos = (parseInt(segundos / 60))
segundos = segundos % 60


console.log( horas + ":"+  minutos + ":" + segundos)