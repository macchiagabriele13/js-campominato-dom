/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. */

/* Seleziono il bottone */
const bottoneGeneratore = document.querySelector(".btn_play")
console.log(bottoneGeneratore);

/* Seleziono la griglia */
let containerGrid = document.querySelector('.container')
console.log(containerGrid);

/* Creo i miei box */

/* for (let i = 1; i <= 100; i++) {
  const boxEl = document.createElement('div')
  boxEl.classList.add('box')
  containerGrid.append(boxEl)
} */
let numbMax = 100

/* Devo rendere flessibile la griglia attraverso una funzione */

/* Ogni cella ha un numero progressivo, da 1 a 100. */
bottoneGeneratore.addEventListener("click", function () {
    console.log("Bottone cliccato");


    boxGenerator(numbMax, containerGrid)

    function boxGenerator(numero, griglia) {
        for (let i = 1; i <= numero; i++) {
            griglia.innerHTML += `<div class="box">${i}</div>`
        }

        let boxEl = document.querySelectorAll('.box')
        console.log(boxEl);

        for (let i = 0; i < boxEl.length; i++) {
            let currentBox = boxEl[i]
            console.log(currentBox);

            currentBox.addEventListener("click", function () {
                currentBox.classList.toggle("azzurro")
                console.log(currentBox.innerHTML)
            })
        }
    }

})

/* Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

/* for(let i = 1; i <= boxEl.length; i++){
    let currentBox = boxEl[i]
    console.log(currentBox);

    /* currentBox.addEventListener("click", function(){
        currentBox.classList.toggle("azzurro")
        console.log(currentBox.id)
    }) */


/* Al click compare la mia griglia */


/* bottoneGeneratore.addEventListener("click", function () {
    containerGrid.style.display = "flex";
}) */