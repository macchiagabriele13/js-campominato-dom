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

let bombMax = 16

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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

        const bombs = generateBombs(1, numbMax)
        console.log(bombs);




        

        for (let i = 0; i < boxEl.length; i++) {
            let currentBox = boxEl[i]
            /* console.log(currentBox); */

            currentBox.addEventListener("click", function () {
                /* Dalla casella selezionata mi prendo il mio numero */
                const boxNumber = currentBox.innerHTML
                console.log(boxNumber, 'numero box');

                currentBox.classList.toggle('azzurro')

                /* Devo controllare se il numero che ho preso sia presente nell'array delle bombe, e per farlo devo usare un ciclo */
                
                for (let i = 0; i < bombs.length; i++) {
                    const bomb = bombs[i];
                    /* console.log(bomb, 'bomba'); */

                    if(boxNumber == bomb) {
                        currentBox.classList.toggle('rosso')

                    }
                    
                }
            })

        }
        

      
    



    }
})


/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. */
/* Attenzione:
**nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. */

/* const bombs = generateBombs(1, numbMax)
console.log(bombs); */

function generateBombs(min, max) {
    const bombs = []
    while (bombs.length !== bombMax) {
        const bomb = getRandomNumber(min, max)

        if (!bombs.includes(bomb)) {
            bombs.push(bomb)

        }

    }
    return bombs
}

/* In seguito l'utente clicca su una cella: */

/* se il numero è presente nella lista dei numeri generati  */

/* abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. */

/* Altrimenti la cella cliccata si colora di azzurro */
/* e l'utente può continuare a cliccare sulle altre celle. */


/* 
ok, una volta che hai le bombe, usale nel punto in cui fai il ciclo per generare le celle. Li hai giá accesso alla singola cella e quindi puoi usare innerText per prendere il suo numero e confrontarlo con la lista di bombe per vedere se é incluso. Se é incluso allora hai cliccato su una bomba e quindi al click colori la cella di rosso */