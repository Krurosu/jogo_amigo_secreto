//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    input.value = '';
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    let sorteio = [];
    let amigosDisponiveis = [...amigos];

    amigos.forEach(amigo => {
        let possiveis = amigosDisponiveis.filter(a => a !== amigo);
        if (possiveis.length === 0) {
            alert('Não foi possível realizar o sorteio. Tente novamente.');
            return;
        }

        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        sorteio.push({ amigo, sorteado });
        amigosDisponiveis = amigosDisponiveis.filter(a => a !== sorteado);
    });

    exibirResultado(sorteio);
}

// Função para exibir o resultado do sorteio
function exibirResultado(sorteio) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    sorteio.forEach(par => {
        const li = document.createElement('li');
        li.textContent = `${par.amigo} tirou ${par.sorteado}`;
        resultado.appendChild(li);
    });
}