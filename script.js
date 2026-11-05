
function abrir(opcao) {

    var janela = document.getElementById("janela");
    var titulo = document.getElementById("titulo");
    var texto = document.getElementById("texto");

    // Abrir Sobre Nós
    if (opcao == "Sobre Nós") {
        janela.style.display = "none";
        document.getElementById("janelaContato").style.display = "none";
        document.getElementById("janelaSobre").style.display = "flex";
        return;
    }

    // Abrir Contato
    if (opcao == "Contato") {
        janela.style.display = "none";
        document.getElementById("janelaSobre").style.display = "none";
        document.getElementById("janelaContato").style.display = "flex";
        return;
    }

    // Fechar janelas especiais ao abrir outras abas
    document.getElementById("janelaSobre").style.display = "none";
    document.getElementById("janelaContato").style.display = "none";

    janela.style.display = "block";
    titulo.innerHTML = opcao;

    if (opcao == "Habilidades") {
        texto.innerHTML = "Estamos aprendendo HTML, CSS e JavaScript.";
    }

    else if (opcao == "Sobre mim") {
        texto.innerHTML = "Somos estudantes do Anglo e estamos aprendendo programação.";
    }

    else if (opcao == "Projetos") {
        texto.innerHTML = "Aqui estão nossos projetos de programação.";
    }

    else if (opcao == "Leia-me") {
        texto.innerHTML = "Bem-vindo ao portfólio do Anglo Codifica! Clique nos ícones para conhecer nosso trabalho.";
    }

    else if (opcao == "Início") {
        texto.innerHTML = "Bem-vindo ao nosso portfólio!";
    }
}


// Fechar a janela original
function fechar() {
    document.getElementById("janela").style.display = "none";
}


// Fechar janela Sobre Nós
function fecharSobre() {
    document.getElementById("janelaSobre").style.display = "none";
}


// Fechar janela Contato
function fecharContato() {
    document.getElementById("janelaContato").style.display = "none";
}


// Relógio
function atualizarRelogio() {

    var agora = new Date();

    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    var dia = agora.getDate();
    var mes = agora.getMonth() + 1;

    if (horas < 10) {
        horas = "0" + horas;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    if (dia < 10) {
        dia = "0" + dia;
    }

    if (mes < 10) {
        mes = "0" + mes;
    }

    document.getElementById("relogio").innerHTML =
        horas + ":" + minutos + ":" + segundos +
        " | " + dia + "/" + mes;
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);
