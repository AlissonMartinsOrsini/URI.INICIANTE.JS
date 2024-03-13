function tarefa(trabalho1, trabalho2){

    const comprarsorvete = trabalho1 || trabalho2

    const comprarTV50 = trabalho1 && trabalho2

    const comprarTV32 =  trabalho1 != trabalho2

    const manterSaudavel = !comprarsorvete

    return {comprarsorvete, comprarTV50, comprarTV32, manterSaudavel}

}

console.log(tarefa(true, true))
console.log(tarefa(true, false))
console.log(tarefa(false, true))
console.log(tarefa(false, false))