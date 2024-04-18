let input = require('fs').readFileSync('stdin', 'utf8');

let lines = input.split("\n")

let line = lines.shift().split(" ");
let v1 = parseInt(line[0]);
let v2 = parseInt(line[1]);
let v3 = parseInt(line[2]);

const valoresSaida = line

line = ordenaNumero(line);

function ordenaNumero(numeros) {
    return [...line].sort((x, y) => x - y);
}

// console.log(line[0] + "\n" + line[1] + "\n" + line[2] + "\n") 2 jeitos de imprimir
for (let i = 0; i < 3; i++) {
    console.log(line[i])
}
console.log("")
for (let i = 0; i < 3; i++) {
    console.log(valoresSaida[i])
}