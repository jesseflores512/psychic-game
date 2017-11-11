//keep track of score, keep track of guesses remaining

var wins = 0;
var losses = 0;
var guesses = 10;
var answer 
var lettersGuessed = [];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
'p','q','r','s','t','u','v','w','x','y','z']; 
//Capture user's guess

document.onkeyup = function(event) {
	var input = event.key; 


    lettersGuessed.push(input);    
    answer = alphabet[Math.floor(Math.random() *    alphabet.length)];
 
	
//compare guesses to answer and keep track
	if (input === answer) {
		wins ++;
		guesses = 10;
		lettersGuessed = [];
	alert("you win!")

} 	else {
	guesses --;
}

	if (guesses === 0) {
		losses ++;
		guesses=10;
		lettersGuessed = [];
	}


console.log(guesses)
//show info on screen
$("#guesses").text(guesses);
$("#wins").text(wins);
$("#losses").text(losses);
$("#letters").text(lettersGuessed);
}

