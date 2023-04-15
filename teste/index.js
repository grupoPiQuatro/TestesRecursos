let carros = [['azul', 'sedan'],
              ['verde', 'SUV'],
              ['verde', 'ret'],
              ['azul', 'pickup'],
              ['azul', 'sport'],
              ['vermelho', 'esportivo'],
              ['amarelo', 'conversível'],
              ['preto', 'hatchback'],
              ['cinza', 'SUV'],
              ['branco', 'sedan'],
              ['branco', 'sedan'],
              ['branco', 'sedan'],
              ['branco', 'sedan']
             ];

let indicePaginaAtual = 0;
const maximoElementosPorPagina = 6;

let caixas = document.createElement('div');
caixas.classList.add('caixas');

function mostrarDados(indiceInicial) {
    caixas.innerHTML = '';

    for (let i = indiceInicial; i < carros.length && i < indiceInicial + maximoElementosPorPagina; i++) {
        let texto = `Esse carro é do Léo lindo: ${carros[i]}`;
        let inserirDados = document.createTextNode(texto);

        let novaDiv = document.createElement('div');
        novaDiv.appendChild(inserirDados);
        caixas.appendChild(novaDiv);
    }

    let container = document.querySelector('.container');
    let anteriorButton = document.querySelector('#anterior');
    let proximoButton = document.querySelector('#proxima');

    if (indiceInicial === 0) {
        anteriorButton.disabled = true;
    } else {
        anteriorButton.disabled = false;
    }

    if (indiceInicial + maximoElementosPorPagina >= carros.length) {
        proximoButton.disabled = true;
    } else {
        proximoButton.disabled = false;
    }

    container.innerHTML = '';
    container.appendChild(caixas);
    container.appendChild(anteriorButton);
    container.appendChild(proximoButton);
}

function proximaPagina() {
    indicePaginaAtual += maximoElementosPorPagina;
    if (indicePaginaAtual >= carros.length) {
        indicePaginaAtual -= maximoElementosPorPagina;
    }
    mostrarDados(indicePaginaAtual);
}

function paginaAnterior() {
    indicePaginaAtual -= maximoElementosPorPagina;
    if (indicePaginaAtual < 0) {
        indicePaginaAtual = 0;
    }
    mostrarDados(indicePaginaAtual);
}

mostrarDados(indicePaginaAtual);
