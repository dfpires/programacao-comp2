chefe()

function chefe(){
    let vendedores = [] // alteramos var por let por ser uma variável com escopo local e não global
    let vendas = [] // alteramos var por let por ser uma variável com escopo local e não global
    do {
        let opcao = Number(prompt(`Escolha: 
        [1].Cadastrar Vendedor 
        [2]. Cadastrar Venda
        [3]. Consulta vendas Func Mes
        [4]. Consulta vendas Func 
        [5]. Consulta Maior Venda Mês
        [6]. Fazer
        [7]. Sair`))
        switch(opcao){
            case 1: cadastraVendedor(vendedores) // passando a referência de vendedores
                    break
                    // é necessário o vetor de vendas e também o vetor de vendedores
            case 2: cadastraVendas(vendas, vendedores) 
                    break
            case 3: consultaVendasFuncionarioMes(vendas)
                    break
            case 4: consultaVendasFuncionario(vendas)
                    break
            case 5: consultaMaiorVendedor(vendas)
                    break
            case 6: console.log(`Saindo ...`)
                    break
        } 
    }
    while (opcao != 7)
}

function cadastraVendedor(vendor){ // escopo local - vendor faz referência para vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe o código`))
    objeto.nome = prompt(`Informe o nome`)
    // verifica se o código já existe
    for(let i=0;i<vendor.length;i++){
        if (vendor[i].codigo == objeto.codigo){
            console.log(`Código já existente`)
            return 0 // sai da função
        }
    }
    // insere no vetor
    vendor.push(objeto)
    console.log(`Vendedor cadastrado com sucesso`)
}

function cadastraVendas(vend, vendor){ // vend representa vendas e vendor representa vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe código da venda`))
    objeto.vendedor = Number(prompt(`Informe código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))

    // verifica o código do vendedor existe
    for(let i=0;i<vendor.length;i++){
        if (vendor[i].codigo == objeto.vendedor){ // vendedor existe
            for(let j=0; j < vend.length;j++){ //  verifica se vendedor já tem cadastro no mês
                if ((vend[j].vendedor == objeto.vendedor) && (vend[j].mes == objeto.mes)){
                    console.log(`Venda já cadastrada neste mes para o vendedor `)
                    return 0 // sai da função
                }
            }
            // insere no vetor de vendas
            vend.push(objeto)
            console.log(objeto)
            return 0 // sai da função
        }
    }
    console.log(`Vendedor não existe`)
}

function consultaVendasFuncionarioMes(vend){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let mes = Number(prompt(`Informe o mês da venda`))
    for(let i=0;i<vend.length;i++){
        if ((vend[i].vendedor == vendedor) && (vend[i].mes == mes)){
            console.log(`Valor da venda ${vend[i].valor}`)
            return 0 // sai da função
        }
    } 
    console.log(`Vendedor e/ou mês sem venda`)
}

function consultaVendasFuncionario(vend){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let total = 0 // não achei o funcionário
    for(let i=0;i<vend.length;i++){
        if (vend[i].vendedor == vendedor){
            total = total + vend[i].valor
        }
    } 
    if (total == 0){
        console.log(`Vendedor sem venda`)
    }
    else {
        console.log(`O total das vendas é ${total}`)
    }
}

function consultaMaiorVendedor(vend){
    let mes = Number(prompt(`Informe o mês da venda`))
    let codigoVendedor // codigo do vendedor que mais vendeu
    let maiorVenda = 0 // maior venda

    for(let i=0;i<vend.length;i++){ // percorre o vetor de vendas
        if (vend[i].mes == mes){ //  verifica se é um mês de interesse
            if (vend[i].valor > maiorVenda){ // achei maior venda
               // atualizar os valores maiores
               maiorVenda = vend[i].valor
               codigoVendedor = vend[i].vendedor     
            }
        }
    } 
    console.log(`A maior venda é de ${maiorVenda} feita pelo vendedor ${codigoVendedor}`)
}


