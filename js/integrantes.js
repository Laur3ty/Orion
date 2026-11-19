// Carrossel dos integrantes
const anel = document.getElementById('anel');
const fotos = document.querySelectorAll('.carrossel-foto');
const integrantes = document.querySelectorAll('.integrante');
const carrossel = document.querySelector('.carrossel');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');

// Calcula o ângulo de cada foto
const ANGULO = 360 / fotos.length; // 8 fotos: 45 graus entre uma e outra
let posicao = 0;
let pausado = false;

// Identifica qual foto está na frente
function fotoDaFrente() {
    return ((posicao % fotos.length) + fotos.length) % fotos.length;
}

// Gira o anel e atualiza foto e dados da frente
function atualizar() {
    anel.style.transform = 'rotateY(' + (-posicao * ANGULO) + 'deg)';

    const frente = fotoDaFrente();
    const integranteDaFrente = frente % integrantes.length;

    // Destaca a foto que está na frente
    for (let i = 0; i < fotos.length; i++) {
        fotos[i].classList.toggle('frente', i === frente);
    }

    // Destaca os dados do integrante correspondente
    for (let i = 0; i < integrantes.length; i++) {
        integrantes[i].classList.toggle('ativo', i === integranteDaFrente);
    }
}

// Avança uma posição no carrossel
function proximo() {
    posicao++;
    atualizar();
}

// Volta uma posição no carrossel
function anterior() {
    posicao--;
    atualizar();
}

// Eventos dos botões
botaoProximo.addEventListener('click', proximo);
botaoAnterior.addEventListener('click', anterior);

// Pausa quando o mouse entra no carrossel
carrossel.addEventListener('mouseenter', function () {
    pausado = true;
});

// Retoma quando o mouse sai do carrossel
carrossel.addEventListener('mouseleave', function () {
    pausado = false;
});


atualizar();

// Gira sozinho a cada 3 segundos
setInterval(function () {
    if (!pausado) {
        proximo();
    }
}, 3000);
