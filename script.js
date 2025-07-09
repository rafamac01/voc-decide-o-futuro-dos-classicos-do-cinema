const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em Titanic (1997), qual é o nome do diamante azul que Caledon Hockley compra para Rose?",
        alternativas: [
            {
                texto: "Coração do Oceano",
                afirmacao: "no inicio demontrou medo de errar, mas consegui me lembrar"
            },
            {
                texto: "Estrela do Mar",
                afirmacao: "ficou um pouco confuso(a) e errou a questão"
            }
        ]
    },
    {
        enunciado:"Em qual filme podemos ouvir a frase,Eu sou seu pai?",
        alternativas: [
            {
                texto: " Star Wars: O Império Contra-Ataca.",
                afirmacao: "está melhorando a cada questão"
            },
            {
                texto: "Rei Leão",
                afirmacao: "tentou e acabou errando a alternativa, mas naõ desista"
            }
        ]
    },
   {
   
        enunciado: "Qual é o nome do navio de Jack Sparrow em Piratas do Caribe?",
        alternativas: [
            {
                texto: "Pérola Negra",
                afirmacao: "continue o seu balanço para acerta todas."
            },
            {
                texto: "O Holandês Voador.",
                afirmacao: "esta com dificuldades?,deveria assistir mais filme de aventura!!"
            }
        ]
    },
    {
        enunciado: " Qual filme apresenta um DeLorean que viaja no tempo? ",
        alternativas: [
            {
                texto: " O Exterminador do Futuro.",
                afirmacao: ", todos os filmes são antigos e memoraveis,mesmo com pouco conhecimento voc~e seria capaz de responder, será que voçê precisa adicionar filmes calssicos a sua lista!?."
            },
            {
                texto: " De Volta para o Futuro.",
                afirmacao: ", respondendo todas as perguntas até as mais dificeis, você realmente conhece os classicos ou deve melhor sua lista?!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
