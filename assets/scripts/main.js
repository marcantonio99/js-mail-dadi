/*creo un array delle mail*/
let list = ['sergio@email.com', 'ponzio89@email.it, rubberduck@email.com'];
console.log(list);
/*recupero l'elemento html*/
let inputEmail = document.getElementById('inputEmail');
/*variabile soldatino*/
let presenzaEmail = false;
/*faccio partire la funzione al click*/
function controlla(){
    let valueEmail = inputEmail.value;

    for(let i=0; i<list.length; i++){
        let thisEmail = list[i];
        console.log(thisEmail);

        if(valueEmail == thisEmail){
            presenzaEmail = true;
        }
    }

    if( presenzaEmail ){
        document.getElementById('testo').innerText = "email presente nella lista"
    }else{
        document.getElementById('testo').innerText = "email inserita!"
    }
}

/*-----------------------------------------------------------------------------------------------------------*/

let giocatore = Math.round( Math.random()* 6 ) + 1;
let cpu = Math.round( Math.random()* 6 ) + 1;

document.getElementById('numGiocatore').innerText = `Il numero giocatore: ${giocatore}`
document.getElementById('numCpu').innerText = `Il numero cpu: ${cpu} `

let vittorieGiocatore = [];

if( giocatore > cpu){
    document.getElementById('risultato').innerText = `Ha vinto: Giocatore`
    vittoriaGiocatore.push('vinto');
}else if ( cpu > giocatore ){
    document.getElementById('risultato').innerText = `Ha vinto: Cpu`
}else{
    document.getElementById('risultato').innerText = `Pareggio`
}