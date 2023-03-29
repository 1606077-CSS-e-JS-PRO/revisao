console.log("Funcionou o import")



async function executaBuscaDeLivros() {
    console.log("Buscando livros...")

    // Processamento
    // Buscar os livros na api
    // Fetch
    const url = "https://target-api-simples.cyclic.app/livros"
    const resposta = await fetch(url)
    const livros = await resposta.json()

    // Saida de dados
    const elementoResultado = document.getElementById("resultado")

    // Loop
    // let texto = construirListaDeCards(livros)
    let tabela = construirTabela(livros)

    elementoResultado.innerHTML = texto
}

function construirListaDeCards(livros) {
    let texto = ""

    for (let posLivro = 0; posLivro < livros.length; posLivro++) {
        texto += `
            <div class="card">
                ${livros[posLivro].id} <br>
                ${livros[posLivro].title} <br>
                ${livros[posLivro].description} <br>
            </div>
        `
    }

    return texto
}

function construirTabela(livros) {
    let inicioTabela = `
        <table border="2">
        <thead>
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
    `

    let linhasDoCorpo = ""
    for (let posLivro = 0; posLivro < livros.length; posLivro++) {
        linhasDoCorpo += `
        <tr>
            <td>${livros[posLivro].id}</td>
            <td>${livros[posLivro].title}</td>
            <td>${livros[posLivro].description}</td>
        </tr>
    `
    }

    let fimTabela = `
        </tbody>
    </table>
    `

    const tabelaCompleta = inicioTabela + linhasDoCorpo + fimTabela

    return tabelaCompleta
}