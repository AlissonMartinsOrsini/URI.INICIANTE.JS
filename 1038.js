let input = require('fs').readFileSync('stdin', 'utf8');

let valores = input.split(" ")

let codigo = parseInt(valores.shift())
let quant = parseInt(valores.shift())

function codLache(codigo, valor){

    if (codigo === 1){
        total = valor * 4
        return `Total: R$ ${total.toFixed(2)}`
    }
    else if (codigo ===2){
        total = valor * 4.50
        return `Total: R$ ${total.toFixed(2)}`
    }
    else if (codigo ===3){
        total = valor * 5
        return `Total: R$ ${total.toFixed(2)}`
    }
    else if (codigo ===4){
        total = valor * 2
        return `Total: R$ ${total.toFixed(2)}`
    }
    else if (codigo === 5){
        total = valor * 1.50
        return `Total: R$ ${total.toFixed(2)}`
    }
}

console.log(codLache(codigo, quant))