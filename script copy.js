// player 2 chooses word
//To be completed

var gameIsFinished = false
var life = 6

//Shows length of unrevealed chosen word
var display = [];
for ( i=0; i < chosenWord.length; i++) {
    display += "_ "
}


while (!gameIsFinished){
    //User Input letter
    var guess;
    //To be completed

    if (guess in display) {
        alert("You've already guessed" + guess)
    }

    for (position=0; position < chosenWord.length; i++) {
        letter = chosenWord[position];
        if (letter == guess){
            display[position] = letter
        }
    }
    console.log(display);

    if (guess in chosenWord == false) {
        alert('You guessed '+ guess + ", and that's not in the chosen word, you lose 1 life")
        life -= 1
        if (life == 0) {
            gameIsFinished = true;
            alert('Game Over, You lost')
        }
    }

    if ('_' in display == false) {
        gameIsFinished = true;
        alert('Game Over, You Won')
    }   
}

