console.log("Conteúdo de Javascript")

  // console.log(document)

  // Como ler e manipular conteúdo em texto de tags
  const titulo = document.getElementById("nome-empresa")
  console.log(titulo)
  const tituloTexto = titulo.innerText
  console.log(tituloTexto)
  setTimeout(() => {
    titulo.innerText = "Outro título qualquer"
  }, 1000)

  // PRÁTICA
  // Alterem o conteúdo sobre a empresa.
  // 1. Buscar pelo id correto OK
  // 2. Printar na tela a tag e analisar o conteúdo OK
  // 3. Printar o conteúdo no console
  // 4. Alterar o conteúdo sobre a empresa 
  // (insiram o nome da empresa no text, usando template string)
  const sobreAEmpresa = document.getElementById("sobre")
  console.log(sobreAEmpresa)
  const conteudoSobreAEmpresa = sobreAEmpresa.innerText
  console.log(conteudoSobreAEmpresa)
  sobreAEmpresa.innerText = `Novo conteúdo sobre a empresa ${titulo.innerText}`



  const menus = document.getElementsByClassName("menu")
  // HTML COLLECTION
  console.log(menus)

  // Converter uma collection para Array
  const menusArray = Array.from(menus)

  console.log(menusArray)

  menusArray.forEach(menu => {
    console.log(menu.innerText)
  })

  const menuNomes = menusArray.map(menu => menu.innerText)

  console.log(`Os menus do site são: ${menuNomes.join(", ")}`)


  const produtosContainer = document.getElementById("produtos")

  console.log(produtosContainer)

  const produtos = produtosContainer.children

  console.log(produtos)

  const produtosArray = Array.from(produtos)

  const produtosNomes = produtosArray.map(prod => prod.innerText)

  console.log(`Produtos ofertados: ${produtosNomes.join(", ")}`)

  /*
  {
    "protudo A": 50,
    "produto B": 100,
    "produto C": 80
  }
  */
  // 1. Buscar as vendas realizadas
  // 2. Extrair das vendas o produto e a quantidade vendida
  // 3. Adicionar no objeto a quantidade vendida daquele prod
  // 4. Mostrar no console o resultado das vendas
  const vendas = document.getElementById("vendas")
  console.log(vendas)

  const conteudovendas = vendas.children[1]
  console.log(conteudovendas)

  const listaDeVendas = conteudovendas.children

  const listaDeVendasArray = Array.from(listaDeVendas)

  console.log(listaDeVendasArray)

  const produtosVendidos = {}
  // const valoresTotais = {}

  listaDeVendasArray.forEach(venda => {
    const produtovendido = venda.children[1].innerText
    const quantidadevendida = venda.children[2].innerText
    const valorVendido = venda.children[3].innerText

    const valorVendidoFloat = parseFloat(valorVendido.replace("R$ ", ""))

    console.log(`${produtovendido} - ${quantidadevendida}`)
    if(!produtosVendidos[produtovendido]){
      produtosVendidos[produtovendido] = {
        quantidade: 0,
        valor: 0
      }
    }

    // if(!valoresTotais[produtovendido]){
    //   valoresTotais[produtovendido] = 0
    // }

    produtosVendidos[produtovendido].quantidade += parseInt(quantidadevendida)
    produtosVendidos[produtovendido].valor += valorVendidoFloat
    // valoresTotais[produtovendido] += valorVendidoFloat
  })

  // [
  //   {
  //     produto: nomeproduto,
  //     quantidade: 10,
  //     valor: 1000
  //   }
  // ]

  console.log(`Produtos vendidos: `, produtosVendidos)

  const cabecalhoResumo = document.getElementById("resumo-vendas-cab")

  console.log(cabecalhoResumo)

  const tabelaResumo = cabecalhoResumo.parentNode

  console.log(tabelaResumo)

  //'margin-top'
  tabelaResumo.style.marginTop = '50px'

  const nomesDosProdutos = Object.keys(produtosVendidos)

  console.log(nomesDosProdutos)

  const resumoVendas = document.getElementById("resumo-vendas")

  console.log(resumoVendas)

  function criarElementoComConteudo(elemento, conteudo){
    
  }

  nomesDosProdutos.forEach(produto => {
    const tr = document.createElement("tr")

    const tdProduto = document.createElement("td")
    const tdQuantidade = document.createElement("td")
    const tdValor = document.createElement("td")

    tdProduto.innerText = produto
    tdQuantidade.innerText = produtosVendidos[produto].quantidade
    tdValor.innerText = 
    `R$ ${produtosVendidos[produto].valor.toFixed(2).replace(".", ",")}`

    tr.appendChild(tdProduto)
    tr.appendChild(tdQuantidade)
    tr.appendChild(tdValor)

    resumoVendas.appendChild(tr)
  })