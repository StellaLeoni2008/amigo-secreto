let amigos = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let listaElement = document.getElementById('lista-amigos');
    if (listaElement.innerHTML == '') {
        listaElement.innerHTML = nome;
    } else {
        listaElement.innerHTML += ', ' + nome;
    }

    document.getElementById('nome-amigo').value = '';
    amigos.push(nome);
}

function sortear() {
    embaralhar(amigos);
    const sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -> ' + amigos[(i + 1) % amigos.length] + '<br>';
        }
    }
}

function embaralhar(listaElement){
    for (let indice = listaElement.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [listaElement[indice - 1], listaElement[indiceAleatorio]] = [listaElement[indiceAleatorio], listaElement[indice - 1]];
    }
}

function reiniciar(){
    nome = document.getElementById('nome-amigo').value = '';
    listaElement = document.getElementById('lista-amigos').innerHTML = '';
    sorteio = document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
}

    
