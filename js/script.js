// elementi DOM e variabili

let seconds = 31; //tempo disponibile per memorizzare i numeri
let randomNumbers = []
let userNumbers = []
let result = []
let countdown = document.getElementById("countdown");
let instructions = document.getElementById("instructions");
let numberList = document.getElementById("numbers-list");
let visibleForm = document.getElementById("answers-form");
let inputGroup = document.querySelectorAll("div#input-group > input");
let button = document.querySelector("button");

console.log(numberList, inputGroup, visibleForm, button);

// creo un ciclo for per creare 5 numeri casuali che inserisco dentro un'array

for(let i=0; i<5; i++){
    randomNumbers.push(rN(1, 50));
}

console.log(randomNumbers);

//prendo i risultati del form quando premo il bottone

button.addEventListener("click", (event) => {
    event.preventDefault();

    //ottengo i valori degli input e li pusho dentro l'array userNumbers

    for(let i=0; i<inputGroup.length; i++){
        userNumbers.push(parseInt(inputGroup[i].value));
    }
    console.log(userNumbers);

    // con due cicli for controllo gli elementi di due array, il risultato deve contenere solo i numeri dell'utente che sono uguali a quelli generati

    for(let i=0; i<randomNumbers.length; i++){
        for(let y=0; y<userNumbers.length; y++){
            if (randomNumbers[i] === userNumbers[y]){
                result.push(userNumbers[y]);
            }
        }
    }
    console.log(result);
})

//cambiamenti nel DOM

numberList.innerHTML = `<li>${randomNumbers}</li>`;

// con setInterval decremento la variabile seconds di 1 ogni secondo
let timer = setInterval(function(){
    seconds--
    // e vado a trasferire il valore in html
    countdown.innerText = seconds
},1000);
// con setTimeout e clearInterval fermo la variabile seconds prima che scenda sotto lo zero
setTimeout(function(){
    clearInterval(timer)
    numberList.classList.add("d-none");
    visibleForm.classList.remove("d-none");
    instructions.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"
},32000)

//Functions

function rN(min, max){
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
}