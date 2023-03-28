
// 0 - Adicionar o evento de click
window.addEventListener("load", () => {
    const elementoBotao = document.getElementById("botaoCadastrar")
    console.log(elementoBotao.innerText)

    elementoBotao.addEventListener("click", funcaoPrincipal)
})

async function funcaoPrincipal() {
    console.log("Foi clicado")
    // Entradas de dados (HTML)
    const elBookTitle = document.getElementById("bookTitle")
    const elBookDescription = document.getElementById("bookDescription")

    const title = elBookTitle.value
    const description = elBookDescription.value

    // Validacao
    // SE ENTAO - e &&, ou ||
    if (title == "" /* V */  || description == "" /* F */) {
        const elementResp = document.getElementById("retornoErro")
        elementResp.style.display = "block"
        elementResp.innerHTML = "Faltou coisa ai!"
        return
    }

    // Processamento
    // Mandar title e description para API
    // e pegar o retorno da API
    const url = "https://target-api-simples.cyclic.app/livros"
    const payload = {
        "title": title,
        "description": description
    }

    const resposta = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload)
    })
    const retorno = await resposta.json()

    // Saída
    // 1 - Mostrar a mensagem verde
    // 2 - Mostrar na mensagem a mensagem da API
    const elementoResposta = document.getElementById("retorno")
    elementoResposta.style.display = "block"
    elementoResposta.innerHTML = retorno
}