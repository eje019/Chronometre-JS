//les variables dont on a besoin 
var sp, btnStart, btnStop, btnReset, temps, ms, s, min, heure;

//fonction pour initialiser les variables quqnd la page se charge
window.onload = function() {
    sp=document.getElementsByTagName("span");
    btnStart=document.getElementById("start");
    btnStop=document.getElementById("stop");
    btnReset=document.getElementById("reset");
    temps = null;
    ms = 0;
    s = 0;
    min = 0;
    heure = 0;
}