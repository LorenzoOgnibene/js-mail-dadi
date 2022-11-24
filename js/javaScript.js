/**
 *  Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

const userNumber = Math.floor(Math.random() * 6 + 1);
console.log(userNumber)
const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log(computerNumber);


if (userNumber > computerNumber){
    console.log('Ohhh no Hai vinto')
}else if (userNumber === computerNumber){
    console.log('Abbiamo pareggiato')
}else{
    console.log('Ho vinto TIE')
}


/**
 * Mail
    Chiedi all’utente la sua email, 
    controlla che sia nella lista di chi può accedere, 
    stampa un messaggio appropriato sull’esito del controllo.
*/

const emailList = [
    'giacomobelli@gmail.com',
    'beicapelli81@gmail.com',
    'ritadallachiesa@gmail.com',
    'riccardopetricca@libero.it',
    'luigimicco@hotmail.com',
    'gianpasquale@live.it',
    'gigidalessio@aurba.it',
    'laurapausini@outlook.com',
    'emmammarrone@live.it',
    'rosarose@hotmail.com',
    'zizzona66@gmail.com',
    'banana33@live.it',
    'rosariadallachiesa@aurba.it',
    'nonsopiùchescrivere@gmail.com',
    'boolean@edu.com',
    'onlyfans@gmail.com',
];

const button = document.querySelector('a.btn');

button.addEventListener('click', function(){
    const userEmail = document.getElementById('email').value;
    console.log(userEmail);
    for (let i = 0; i < emailList.length; i++){
        if(userEmail === emailList[i]){
            console.log('bentornato');
        }else if (userEmail !== emailList[i]){
            console.log('mi spiace');
        }
    }
})
