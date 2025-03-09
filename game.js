// Pega a altura e largura da janela do browser

let altura = window.innerHeight
let largura = window.innerWidth

// Ao mudar o tamanho da janela, redeclarar as variáveis
function ajustaTamanhoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoJogo()


