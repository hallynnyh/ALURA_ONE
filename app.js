//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

adicionarAmigo = () => {
    let amigo = document.getElementById('amigo').value
    if (amigo === '') {
        alert('Por favor, insira um nome de um amigo!')
        return
    } else if (amigos.includes(amigo)) {
        alert(`Este amigo ${amigo} já foi adicionado!`)
        document.getElementById('amigo').value = ''
        return
    }
    amigos.push(amigo)
    document.getElementById('amigo').value = ''
    listarAmigos()
}

listarAmigos = () => {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ''
    amigos.forEach(amigo => {
        let item = document.createElement('li')
        item.textContent = amigo
        lista.appendChild(item)
    })
}

sortearAmigo = () => {
    if (amigos.length === 0) {
        alert('Por favor, adicione pelo menos um amigo!')
        return
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]
    let mensagemSorteio = `O amigo sorteado foi:: ${amigoSorteado}`
    document.getElementById('resultado').innerHTML = mensagemSorteio
}