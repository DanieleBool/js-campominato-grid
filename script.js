// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

document.getElementById('play').addEventListener('click', function(){
    play();
});

function play(){
    const levelSelected = parseInt(document.getElementById('level').value);
    console.log(levelSelected);

    switch(levelSelected){
        case 1:
            cellsNumber = 100;
            // cellForSide = 10;
            cellForSide = Math.sqrt(cellsNumber);
            // 10 è la radice quadrata di 100
            break;
        case 2:
            cellsNumber = 81;
            cellForSide = 9;
            // 9 è la radice quadrata di 81
            break;
        case 3:
            cellsNumber = 49;
            cellForSide = 7;
            // 7 è la radice quadrata di 49
            break;
    }

}


const container = document.querySelector('.container');

// METODO 1 ----------------------------------------------------

// // questa funzione aggiunge un div con classe box
// function addBox(n){
//     n = parseInt(n);
//     let divv;

//     for(let i = 1; i <= n; i++){
//         divv = document.createElement('div');
//         divv.className = 'box';
//         divv.innerHTML = i;
//         console.log(i)
//         container.appendChild(divv);
        
//     }
    
// }

// addBox(49);

// -------------------------------------------------------------

// METODO 2-----------------------------------------------------

// function addBox2(i){
//     let divv;
//     divv = document.createElement('div');
//     divv.className = 'box';
//     console.log(i)
//     divv.innerHTML = i;
//     return divv;
// }
    
// for(let i = 1; i <= 49; i++){
//     container.appendChild(addBox2(i));
// }

// ---------------------------------------------------------------

document.getElementById('play').addEventListener('click', function(){
    play();
});

function play() {
    document.querySelector('.container').innerHTML = '';

    const levelSelected = parseInt(document.getElementById('level').value);

    switch(levelSelected){
        case 1:
            // questa funzione aggiunge un div con classe box
            function addBox(n){
                n = parseInt(n);
                let divv;

                for(let i = 1; i <= n; i++){
                    divv = document.createElement('div');
                    divv.className = 'box';
                    divv.innerHTML = i;
                    console.log(i)
                    container.appendChild(divv);
                    
                }
                
            }

            addBox(100);       
            break;
        case 2: 
            // questa funzione aggiunge un div con classe box
            function addBox(n){
                n = parseInt(n);
                let divv;

                for(let i = 1; i <= n; i++){
                    divv = document.createElement('div');
                    divv.className = 'box';
                    divv.innerHTML = i;
                    console.log(i)
                    container.appendChild(divv);
                    
                }
                
            }

            addBox(81);             
            break;
        case 3: 
            // questa funzione aggiunge un div con classe box
            function addBox(n){
                n = parseInt(n);
                let divv;

                for(let i = 1; i <= n; i++){
                    divv = document.createElement('div');
                    divv.className = 'box';
                    divv.innerHTML = i;
                    console.log(i)
                    container.appendChild(divv);
                    
                }
                
            }

            addBox(49); 
    }

}