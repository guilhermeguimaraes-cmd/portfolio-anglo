

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

