//Pseudo code

//1  Define variables for arrays
//2  The computer picks a random letter from the alphabet
//2a define alphabet in array
//2b setup random guess from computer
//   var computerRandom = computerChoices[Math.floor(Math.random() *computerChoices.length)];
//3  User presses key on keyboard
//3a   Compare the computerRandom to the userGuess  
//4  If the key pressed matches the one the computer selected add one to wins
//5  If not add pressed key to losses and add the letter to the 'you guessed list'
//6  If losses gets to 0 then reset
//7  If win then reset

var wins = 0;
var losses = 0;
var guesses = 9;


//Commented out most of the alphabet so that I could try and test it
var computerChoices = ["a", "b"/*, "c", "d"*/
//        , "e", "f", "g", "h", "i", "j",
//        "k", "l", "m", "n", "o", "p",
//       "q", "r", "s", "t", "u", "v",
//        "w", "x", "y", "z"
        ];

//When user presses key run function
document.onkeyup = function (event) {
    var userGuess = event.key;
//randomly selecte letter out of computerChoices var above    
    var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerRandom)


for (var i = 0; i < computerChoices.length; i++){

  if (userGuess === computerChoices[i]) {

//if userGuess = computer randomly selected letter then add to wins
    if (userGuess === computerRandom) {
      wins++;
    }  //if userGuess != computer randomly selected letter then add to losses
     else if (userGuess != computerRandom) {
      guesses--;
    }

//if guesses gets to 0 then add to losses count
    if (guesses === 0) {
      losses++;

    }

//as var wins/losses/guess change update in html document
    document.querySelector("wins").innerHTML = wins;
    document.querySelector("losses").innerHTML = losses;
    document.querySelector("guessesLeft").innerHTML = guesses;
  }
}
};

// You Just Guessed:      WORKING

var guessesSoFar = document.getElementById("guessesSoFar");

document.onkeyup = function(event) {
  console.log('event', event);
  guessesSoFar.textContent += event.key + ', ';
}
