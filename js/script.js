// Função para mover o botão "Não" aleatoriamente pela página
function moverNaoButton() {
    var naoButton = document.getElementById("nao-button");
    var maxX = window.innerWidth - naoButton.clientWidth;
    var maxY = window.innerHeight - naoButton.clientHeight;
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);
    naoButton.style.left = newX + "px";
    naoButton.style.top = newY + "px";
}

// Mova o botão "Não" a cada 2 segundos
setInterval(moverNaoButton, 2000);

// Função para exibir mensagem de aceitação quando o botão "Sim" é clicado
function aceitar() {
    alert("Você fez-me a pessoa mais feliz do mundo! Te amo!");
}

// Adicione um ouvinte de evento para o botão "Sim"
var simButton = document.getElementById("sim-button");
simButton.addEventListener("click", aceitar);
