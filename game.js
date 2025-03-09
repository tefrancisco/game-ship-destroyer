// Pega a altura e largura da janela do browser

let altura = window.innerHeight;
let largura = window.innerWidth;

// Ao mudar o tamanho da janela, redeclarar as variáveis
function ajustaTamanhoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log(largura, altura);
}

ajustaTamanhoJogo();

function posicaoRandomica() {
  // Remover nave anterior se existe
  document.getElementById('nave') ? document.getElementById('nave').remove() : {}

  // Gerando posição aleatória para spawn da nave
  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;

  // Se for zero, não subtrai 90 e continua 0, se não, mantém o mesmo valor
  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  // Criando o elemento html
  let nave = document.createElement("img");
  nave.src = "imagens/nave.png";
  nave.className = tamanhoAleatorio();
  nave.style.left = posicaoX + "px";
  nave.style.top = posicaoY + "px";
  nave.style.position = "absolute";
  nave.id = "nave";

  document.body.appendChild(nave);

  console.log(tamanhoAleatorio());
}

setInterval(() => {
  posicaoRandomica();
}, 1000);

function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3);

  // Não precisa de break por conta do return
  switch (classe) {
    case 0:
      return "nave";
    case 1:
      return "nave1";
    case 2:
      return "nave2";
  }
}
