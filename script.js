const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("aberto");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("aberto");
  });
});

const filtros = document.querySelectorAll(".filtros button");
const projetos = document.querySelectorAll(".projeto");

filtros.forEach(botao => {
  botao.addEventListener("click", () => {
    filtros.forEach(item => item.classList.remove("ativo"));
    botao.classList.add("ativo");

    const filtro = botao.dataset.filtro;

    projetos.forEach(projeto => {
      projeto.classList.toggle("escondido", projeto.dataset.cat !== filtro);
    });
  });
});

const depoimentos = [
  {
    texto: "Na Prisma, descobri muito mais do que conhecimento técnico. Encontrei motivação, apoio e a chance de crescer como profissional e pessoa.",
    nome: "Kevin Izaías"
  },
  {
    texto: "Sou apaixonado por tecnologia e tenho sede de aprender. A Prisma foi essencial nesse caminho, oferecendo conhecimento técnico e conexões que levarei para a vida.",
    nome: "Breno Souza Ponticelli"
  },
  {
    texto: "Desde o momento em que eu entrei na Prisma, tive a necessidade de aprender mais. Os professores estão sempre dispostos a ajudar.",
    nome: "Morian Brandão Lares"
  },
  {
    texto: "Acompanhei a escola crescer, vi alunos se formando e sigo aprendendo muito no dia a dia.",
    nome: "Sophia Nepomuceno"
  }
];

let depoAtual = 0;
const textoDepo = document.querySelector("#depo-texto");
const nomeDepo = document.querySelector("#depo-nome");

document.querySelector("#proximo").addEventListener("click", () => {
  depoAtual = (depoAtual + 1) % depoimentos.length;
  textoDepo.textContent = depoimentos[depoAtual].texto;
  nomeDepo.textContent = depoimentos[depoAtual].nome;
});

const modal = document.querySelector("#modal");
const abrirVideo = document.querySelector("#abrir-video");
const fecharVideo = document.querySelector("#fechar-video");

abrirVideo.addEventListener("click", () => {
  modal.classList.add("aberto");
});

fecharVideo.addEventListener("click", () => {
  modal.classList.remove("aberto");
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("aberto");
  }
});