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

//mise en place du compteur
function update_chrono(){
    ms++;
    if(ms==10){
        ms = 1;
        s++;
    }
    if(s==60){
        s = 0;
        min++;
    }
    if(min==60){
        min = 0;
        heure++;
    }

    //insertion des vakeurs dans les spans
    //[O] permet de selectionner le premier span
    //[1] le deuxieme etc...
    sp[0].innerHTML = heure + " h";
    sp[1].innerHTML = min + " min";
    sp[2].innerHTML = s + " s";
    sp[3].innerHTML = ms + " ms";
}

