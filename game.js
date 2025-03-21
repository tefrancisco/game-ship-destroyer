// Pega a altura e largura da janela do browser

let altura = window.innerHeight;
let largura = window.innerWidth;
let vidas = 0
let coracoes = document.getElementsByClassName('coracoes')
let tempo = 15

let criaNaveTempo = 1500

// Recupera a url e o search corta só para depois do ?
let dificuldade = window.location.search.replace('?', '')
console.log(dificuldade)

if(dificuldade === 'normal') {
  criaNaveTempo = 1500
}

else if(dificuldade === 'dificil') {
  criaNaveTempo = 1000
}

else {
  criaNaveTempo = 750
}

// Ao mudar o tamanho da janela, redeclarar as variáveis
function ajustaTamanhoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log(largura, altura);
}

ajustaTamanhoJogo();

function iniciarJogo() {
  let nivel = document.getElementById('nivel').value

  nivel === '' ? alert("Selecione um nível para iniciar o jogo!") : window.location.href = 'index.html?' + nivel
}

document.getElementById('cronometro').innerHTML = tempo

let cronometro = setInterval(() => {
    tempo--

    if(tempo < 0) {
      clearInterval(cronometro)
      clearInterval(criaNave)
      window.location.href = 'vitoria.html'
    }
    else {
      document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)

function posicaoRandomica() {
  // Remover nave anterior se existe
  if(document.getElementById('nave')) {
    document.getElementById('nave').remove()

    if(vidas > 2) {
        window.location.href = 'fim_de_jogo.html'
    }

    else {
        coracoes[vidas].src = 'imagens/coracao_vazio.png'
        vidas++
    }
  } 

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
  nave.onclick = (event) => {
    event.target.remove()
  }

  document.body.appendChild(nave);

  console.log(tamanhoAleatorio());
}

let criaNave = setInterval(() => {
  posicaoRandomica();
}, criaNaveTempo);

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
