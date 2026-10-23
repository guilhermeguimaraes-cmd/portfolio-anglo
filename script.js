function abrir(opcao) {
    var janela = document.getElementById("janela");
    var titulo = document.getElementById("titulo");
    var texto = document.getElementById("texto");

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
    else if (opcao == "Contato") {
        texto.innerHTML = "Entre em contato conosco para saber mais sobre nossos projetos.";
    }
    else if (opcao == "Leia-me") {
        texto.innerHTML = "Bem-vindo ao portfólio do Anglo Codifica! Clique nos ícones para conhecer nosso trabalho.";
    }
    else if (opcao == "Início") {
        texto.innerHTML = "Bem-vindo ao nosso portfólio!";
    }
}

/* Fechar a janela */

function fechar() {
    document.getElementById("janela").style.display = "none";

}
/* Relógio */

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
