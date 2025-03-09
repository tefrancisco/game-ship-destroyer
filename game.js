// Pega a altura e largura da janela do browser

let altura = window.innerHeight
let largura = window.innerWidth

// Ao mudar o tamanho da janela, redeclarar as variáveis
function ajustaTamanhoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoJogo()

// Gerando posição aleatória para spawn da nave
let posicaoX = Math.floor(Math.random() * largura) - 90
let posicaoY = Math.floor(Math.random() * altura) - 90

// Se for zero, não subtrai 90 e continua 0, se não, mantém o mesmo valor
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

// Criando o elemento html
let nave = document.createElement('img')
nave.src = "imagens/nave.png"
nave.className = "nave"
nave.style.left = posicaoX + 'px'
nave.style.top = posicaoY + 'px'
nave.style.position = 'absolute'

document.body.appendChild(nave)
