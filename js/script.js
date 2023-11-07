//Ativar links no Menu
const link = document.querySelectorAll(".header-menu a");

console.log("javascript".includes("java"));

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

link.forEach(ativarLink);

// ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);



  resposta.classList.toggle('ativar');
  const ativar = resposta.classList.contains('ativar')
  pergunta.setAttribute('aria-expanded', ativar);
}

function eventosPerguntas(pergunta){
 pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas);

//galeria de motos

const galeria = document.querySelectorAll('.bis-img img');
const galeriaContainer = document.querySelectorAll('.bis-img')

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  console.log(media);

  if (media) {
    const primeiroContainer = galeriaContainer[0]; // Seleciona o primeiro elemento
    primeiroContainer.prepend(img); // Adiciona a imagem ao primeiro contêiner
  }
}

function eventosGaleria(img){
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação
if(window.SimpleAnime){
  new SimpleAnime();
}