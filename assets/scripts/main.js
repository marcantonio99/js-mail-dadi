/*creo un array delle mail*/
let list = ['sergio@mail.com', 'ponzio89@mail.it, rubberduck@mail.com'];
console.log(list);

const inputMail = document.getElementById('inputMail');
/*faccio partire la funzione al click*/
function controlla(){
    let valueMail = inputMail.value;

    list.push(valueMail);
    console.log(list);
}