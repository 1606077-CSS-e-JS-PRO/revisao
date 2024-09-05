console.log("Funcionou o import")



async function executaBuscaDeLivros() {
    console.log("Buscando livros...")

    // Processamento
    // Buscar os livros na api
    // Fetch
    const url = "https://api-aula.up.railway.app/livros"
    const resposta = await fetch(url)
    const livros = await resposta.json()

    // Saida de dados
    const elementoResultado = document.getElementById("resultado")

    // Loop
    // let texto = construirListaDeCards(livros)
    // elementoResultado.innerHTML = texto

    // let tabelaTexto = construirTabela(livros)
    // elementoResultado.innerHTML = tabelaTexto

    const tabelaElementos = construirTabelaComJSCreateElements(livros)
    elementoResultado.innerHTML = "Livros"
    elementoResultado.appendChild(tabelaElementos)
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

function construirTabelaComJSCreateElements(livros) {
    // Cria os elementos principais da tabela
    const tabela = document.createElement("table");
    tabela.setAttribute("border", "2");

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Cria a linha do cabeçalho
    const cabecalho = document.createElement("tr");

    const thId = document.createElement("th");
    thId.textContent = "ID";

    const thTitulo = document.createElement("th");
    thTitulo.textContent = "Título";

    const thDescricao = document.createElement("th");
    thDescricao.textContent = "Descrição";

    // Adiciona os cabeçalhos à linha de cabeçalho
    cabecalho.appendChild(thId);
    cabecalho.appendChild(thTitulo);
    cabecalho.appendChild(thDescricao);

    // Adiciona a linha de cabeçalho ao thead
    thead.appendChild(cabecalho);

    // Cria as linhas do corpo da tabela
    livros.forEach(livro => {
        const linha = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = livro.id;

        const tdTitulo = document.createElement("td");
        tdTitulo.textContent = livro.title;

        const tdDescricao = document.createElement("td");
        tdDescricao.textContent = livro.description;

        // Adiciona as células à linha
        linha.appendChild(tdId);
        linha.appendChild(tdTitulo);
        linha.appendChild(tdDescricao);

        // Adiciona a linha ao tbody
        tbody.appendChild(linha);
    });

    // Monta a tabela
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    // Retorna a tabela completa
    return tabela;
}