let contador = document.getElementById("contador")
let resetar = document.getElementById("resetarContagem")
let cliques = 0

function adicionarValor() {
    cliques += 1;
    contador.innerText = cliques;
}

function resetarContagem() {
    cliques = 0;
    contador.innerText = cliques;
}
