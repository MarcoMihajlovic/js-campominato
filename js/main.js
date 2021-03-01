var arrayMine = [];
var arrayUser = [];
var trovato = true;
var continua = true;
var giusto = true;
var partita = true;
var partitaConclusa = false;
var contatore = 0;
var sentinella = 0;
var scelta = "";

while(trovato){
    for (var i = 0; i < 16; i++) {
        arrayMine[i] = Math.floor(Math.random()*100 +1);
    }

    for (var i = 0; i < arrayMine.length - 1; i++) {
        for (var j = i + 1; j < arrayMine.length; j++) {
            if (arrayMine[i] == arrayMine[j]) {
                contatore++;
            }
        }
    }

    if (contatore == 0) {
        trovato = false;
    }
}

console.log(arrayMine);
contatore = 0;

while(partita) {
    partitaConclusa = false;
    continua = true;
    while(continua) {
        giusto = true
        while(giusto) {
            var numUtente = parseInt(prompt("Inserisci un numero"));
            if (isNaN(numUtente) || numUtente < 1) {
                alert("Devi inserire un valore corretto");
            } else {
                giusto = false;
            }

        }
        
        if (arrayUser.length > 0) {
            for (var i = 0; i < arrayUser.length - 1; i++) {
                for (var j = i + 1; j < arrayUser.length; j++) {
                    if (arrayUser[i] == arrayUser[j]) {
                        contatore++;
                        alert("hai già inserito " + numUtente);

                    }
                }
            }
        }
        
        if(contatore == 0) {
            continua = false;
        }
        arrayUser.push(numUtente);
        
        contatore = 0;
    }
    
    contatore = 0;

    var fortuna = campoMinato(numUtente, arrayMine);

    if (!fortuna) {
        alert("Che peccato hai calpestato una mina ed hai fatto " + contatore + " punti");
        partitaConclusa = true;
    } else {
        contatore++;
        sentinella++;
    }

    if(contatore == 84) {
        alert("Complimenti hai vinto, non hai calpestato nessuna mina, hai fatto punteggio massimo");
        partitaConclusa == true;
    }

    if (partitaConclusa) {
        var risposta = true
        while(risposta){
            scelta = prompt("Vuoi fare un'altra partita? Y/N").toLowerCase();
            if(scelta != "y" && scelta != "n"){
                alert("Inserisci la risposta corretta");
            } else {
                risposta = false;
            }

        }

        if (scelta == "n") {
            partita = false;
        }

    }

}

function campoMinato(utente, mine) {
    for (var i = 0; i < mine.length; i++) {
        if (utente == mine[i]){
            return false;
        }
    }
    return true;
}
