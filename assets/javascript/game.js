//Pseudo code

//1  Define variables to be changed as game goes on
//2  The computer picks a random letter from the alphabet
//2a define alphabet in array
//2b setup random guess from computer
//3  User presses key on keyboard
//4  If the key pressed matches the one the computer selected add one to wins
//5  If not add pressed key to losses and add the letter to the 'you guessed list'
//6  If losses gets to 0 then reset
//7  If win then reset
/*
//1  Define variables to be changed as game goes on

  var wins = 0;
  var losses = 0;

//2  The computer picks a random letter from the alphabet
*/
//2.a  Our array of possible computer choices.
  var computerChoices = ["a", "b", "c", "d",
        "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z"
        ];

  var userChoices = ["a", "b", "c", "d",
        "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z"
        ];
/*
//2.b  Sets the computerGuess variable equal to a random choice from the computerChoice array.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//3  When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

// Determine which key was pressed
        var userGuess = event.key;

// Sets the computerGuess variable equal to a random choice from the computerChoice array.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// If the user presses a letter in the alphabet, run the game logic.
        if (userChoice === computerGuess) {
            wins++;          
        } else if () }
*/


// You Just Guessed:      WORKING

var guessesSoFar = document.getElementById("guessesSoFar");

document.onkeyup = function(event) {
  console.log('event', event);
  guessesSoFar.textContent += event.key + ', ';
  }

function letterchecker(x) {
  var userEntered = x.tolowercase().charAt(0);
  var computerChose = x.tolowercase().charAt(i);

  for (var i = 0; i < computerChoices.length; i++) {

    console.log(computerChoices[i]);

    } /* END OF FOR LOOP

  } /* END OF FUNCTION LETTER CHECKER