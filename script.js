var klikkaukset = document.getElementById('klikkaukset');
var keksi = document.getElementById('ok');
var kerro = document.getElementById('multiply');
var autoclick = document.getElementById('autoclick');
var x = document.getElementById('kerroin');
var cpshtml = document.getElementById('cps');

var cps = 0;
var autoclickHinta = 250;
var kerroinHinta = 100;

var autoclickPaalla = false;

var pisteet = 0;
var clickArvo = 1;
var kerroin = 1;

keksi.addEventListener('click', lisaaPisteita);
autoclick.addEventListener('click', autoclickKaytossa);
kerro.addEventListener('click', kasvataKerrointa);
naytaPisteet();
naytaKerroin();
naytaAutoclick();
Kerroin();
Autoclicker();
kerro.disabled = true;
autoclick.disabled = true;

autoclickInterval = window.setInterval(autoclickF, 1000);

function naytaPisteet() {
    klikkaukset.innerHTML = 'Klikkaukset: ' + pisteet;
    
}

function naytaKerroin() {
    kerro.value = 'Päivitä kerroin (Hinta: ' + kerroinHinta + ' klikkausta)';
   
}

function naytaAutoclick() {
    if (autoclickPaalla == false) {
        autoclick.value = 'Osta autoclicker (Hinta: ' + autoclickHinta + ' klikkausta)';
    } else {
        autoclick.value = 'Päivitä autoclicker (Hinta: ' + autoclickHinta + ' klikkausta)';
    }
    
    
    
}

function Kerroin() {
    x.innerHTML = 'Kerroin: ' + kerroin + 'x';
}

function Autoclicker() {
    cpshtml.innerHTML = 'CPS: ' + cps;
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
    Kerroin();
    Autoclicker()
}

function AutoLisaaPisteita() {
    pisteet += cps;
    napitPaalle();
    naytaPisteet();
    Kerroin();
    Autoclicker()
}

function kasvataKerrointa() {
    pisteet -= kerroinHinta;
    kerroin *= 2;

    clickArvo = kerroin;

    kerroinHinta *= 2;
    napitPaalle();
    naytaPisteet();
    naytaKerroin();
    naytaAutoclick();
    Kerroin();
    Autoclicker()
}

function autoclickKaytossa() {
    pisteet -= autoclickHinta;
    autoclickPaalla = true;
    cps += 1;
    autoclickHinta += 500;
    naytaPisteet();
    napitPaalle();
    naytaAutoclick();
    Kerroin();
    Autoclicker()
}

function autoclickF() {
    if (autoclickPaalla) {
        AutoLisaaPisteita();
    }
}
