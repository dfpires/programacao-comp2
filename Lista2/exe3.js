
chefe()

function chefe(){
    var vetor = [] // escopo global - ele que iremos passar nos parâmetros da função

    do {
        var opcao = Number(prompt("Digite [1]. Req1 [2]. Req2 [3]. Req3 [4]. Req4 [5]. Req 5 [6]. Sair "))
        switch(opcao){
            case 1: requisito1(vetor) 
                    break
            case 2: requisito2(vetor)
                    break
            case 3: requisito3(vetor)
                    break
            case 4: requisito4(vetor)
                    break
            case 5: requisito5(vetor)
                    break
            case 6: console.log(`Programa vai ser encerrado`)
                    break
            default: console.log(`Opção inválida`)
        }    
    }
    while (opcao != 6)

}
function requisito1(vet){ // vet aponta para vetor
    var objeto = new Object()
    objeto.sexo = prompt(`Informe M ou F`)
    objeto.altura = Number(prompt(`Infome altura`))
    objeto.idade = Number(prompt(`Infome idade`))
    objeto.olhos = prompt(`Infome cor dos olhos - A - azul V - verde C - castanho`)
    // insere no vetor
    vet.push(objeto) // insere no vetor (escopo global)
    console.log(`Habitante cadastrado com sucesso`) 
}

function requisito2(vet){ // vet aponta para vetor
    
}
function requisito3(vet){ // vet aponta para vetor
    
}
function requisito4(vet){ // vet aponta para vetor
    
}
function requisito5(vet){ // vet aponta para vetor
    
}
