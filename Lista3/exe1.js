chefe()
function chefe(){
    var matriz = [] // pts do time em cada jogo
    var vetor = [] // os times
    cadastra(matriz, vetor)
    calculaMediaPontos(matriz, vetor)
    calculaTimeMaisPontosRodada(matriz, vetor)
}

function calculaTimeMaisPontosRodada(mat, vet){
    for(let j=0;j<3;j++){
        maisPontos = mat[0][j] // primeiro time fez mais pontos
        nomeMaisPontos = vet[0].nome // primeiro time fez mais pontos
        for(let i=0;i<4;i++){
            if (mat[i][j] > maisPontos){
                maisPontos = mat[i][j] // atualizar maiorPontos
                nomeMaisPontos = vet[i].nome // atualizar nome que tem mais pontos
            }
        }
        // verificou-se a rodada
        console.log(`Na rodada ${j+1} o time ${nomeMaisPontos} fez ${maisPontos}`)
    }
}

function calculaMediaPontos(mat, vet){
    for(let i=0;i<4;i++){ // para cada time
        for(let j=0;j<3;j++){ // para cada rodada
            vet[i].media = vet[i].media + mat[i][j]
        }
        // terminamos de somar
        vet[i].media = vet[i].media / 3
    }
    console.log(vet)
}

function cadastra(mat, vet){
    for(let i=0;i<4;i++) {// para cada time
        let objeto = new Object()
        objeto.nome = prompt(`Informe nome `)
        objeto.cidade = prompt(`Informe cidade`)
        objeto.media = 0
        // insere o time no vetor
        vet.push(objeto)
        // insere os pts
        mat[i] = [] // cria o vetor dentro da matriz
        for(let j=0;j<3;j++){
            mat[i][j] = Number(prompt(`Qts pontos na rodada ${j+1}`))
        }
    }
}