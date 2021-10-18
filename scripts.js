let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

;//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let nextPLayerLabel = document.getElementById('next-lbl')
nextPLayerLabel.innerText = nextPlayer;

function differentPlayer(){
    if(nextPlayer == "X"){
        nextPlayer = "O";
    } else {
        nextPlayer = "X";
    }
}

//This call will create the buttons needed for the gameboard.
createGameBoard(0);

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let button = document.createElement('button');
    button.innerText = "[ ]";
    button.setAttribute("class", "tableMember");

    let list = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"];
    DocumentFragment.getElementById(list[i]).appendChild(newButton);
    if(i < list.length - 1){
        createGameBoard(++i);
    }

}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].onclick = takeCell;
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    let buttonClicked = event.target;
    if(buttonClicked.disabled){
        return;
    }
    buttonClicked.innerHTML = nextPlayer;
    buttonClicked.disable = true;
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOver = document.getElementById('game-over-lbl');
        let h1 = document.createElement('h1');
        let textNode = document.createTextNode("Game Over!");
        h1.appendChild(textNode);
        gameOver.appendChild(h1);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   for(let i = 0; i < btns.length; i++){
       if(!btns[i].disabled){
           return false;
       }
   }

   return true;
}
