var display = document.getElementById('display');
var keksi = document.getElementById('keksi');
var kerro = document.getElementById('multiply');
var autoclick = document.getElementById('autoclick');

keksi.addEventListener('click', lisaaPisteita);
autoclick.addEventListener('click', autoclickKaytossa);
kerro.addEventListener('click', kasvataKerrointa);
naytaPisteet();
naytaKerroin();
naytaAutoclick();
kerro.disabled = true;
autoclick.disabled = true;

autoclickInterval = window.setInterval(autoclickF, cps);

var cps = 1000;
var autoclickHinta = 250;
var kerroinHinta = 100;

var autoclickPaalla = false;
var autoclickKerroin = 1;

var pisteet = 0;
var clickArvo = 1;
var kerroin = 1;

function naytaPisteet() {
    display.innerHTML = 'Klikkaukset: ' + pisteet;
}

function naytaKerroin() {
    kerro.value = 'Kerroin ' + kerroin + 'x (Seuraavan tason hinta: ' + kerroinHinta + ' klikkausta)';
}

function naytaAutoclick() {
    autoclick.value = 'Autoclick ' + autoclickKerroin + ' cps (Seuraavan tason hinta: ' + autoclickHinta + ' klikkausta)';
}

function kerroPaalle() {
    if (pisteet >= kerroinHinta) {
        multiply.disabled = false;
    } else {
        multiply.disabled = true;
    }
}

function autoclickPaalle() {
    if (pisteet >= autoclickHinta) {
        autoclick.disabled = false;
    } else {
        autoclick.disabled = true;
    }
}

function napitPaalle() {
    kerroPaalle();
    autoclickPaalle();
}

function lisaaPisteita() {
    pisteet += clickArvo;
    napitPaalle();
    naytaPisteet();
}

function kasvataKerrointa() {
    pisteet -= kerroinHinta;
    kerroin *= 2;

    clickArvo = kerroin;

    kerroinHinta += 150;
    napitPaalle();
    naytaPisteet();
    naytaKerroin();
}

function autoclickKaytossa() {
    pisteet -= autoclickHinta;
    autoclickPaalla = true;
    naytaPisteet();
    napitPaalle();
}

function autoclickF() {
    if (autoclickPaalla) {
        lisaaPisteita();
    }
}
