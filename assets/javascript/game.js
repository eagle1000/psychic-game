//Generate a random letter and store it in a variable for later
//Ask user to guess letter computer is thinking of 
//Check to see if the letter is correct
//If letter is correct, add +1 to wins and start over
//If letter is incorrect, subtract -1 from guess left
//When guesses left=0, add +1 to losses and start over

// VARIABLES
var options=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;

var computerChoice

// FUNCTIONS
function onkeyup(event) {
  var userguess = String.fromCharCode(event.keyCode).toLowerCase();

  var lettersGuessed= document.getElementById("guessElem")
  lettersGuessed.innerHTML += userguess;


  if (userguess == computerChoice) {
   wins++;
   guesses=9;
   var winCount= document.getElementById("winsElem")
   winCount.innerHTML = wins;
   var lettersGuessed= document.getElementById("guessElem")
   lettersGuessed.innerHTML= [];
   var numGuess= document.getElementById("numGuessElem")
   numGuess.innerHTML = guesses;
   
   computerChoice = options[Math.floor(Math.random()*options.length)];
   console.log(computerChoice);
 }
 else {
   guesses--;
   var numGuess= document.getElementById("numGuessElem")
   numGuess.innerHTML = guesses;
 }
 if (guesses == 0) {
   losses++;
   guesses=9;
   var lossCount= document.getElementById("lossesElem")
   lossCount.innerHTML = losses;
   var lettersGuessed= document.getElementById("guessElem")
   lettersGuessed.innerHTML= [];
   var numGuess= document.getElementById("numGuessElem")
   numGuess.innerHTML = guesses;
   computerChoice = options[Math.floor(Math.random()*options.length)];
   console.log(computerChoice);
 }
}

// STARTUP/MAIN LOGIC
computerChoice = options[Math.floor(Math.random()*options.length)];
console.log(computerChoice);

document.onkeyup = onkeyup
