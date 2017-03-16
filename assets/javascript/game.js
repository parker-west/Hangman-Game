console.log("this works")

//create an array of words
	var instruments = ["drums", "guitar", "bass", "keyboard"];

//variable to capture user guesses.
	var guess = [];

//variable for keep press score.
	var keysPressed = 0;

//variable for guess count down.
	var countDown = 15;

//variable to hold the index of the current word.
	var wordIndex = 0;

//variable to store the index of each letter of a word in the array.
	var letterIndex = 0;

	//function to render question inspired by in-class assignment "question-game-solved.html"
		function renderWord() {
			//if there are still more words left in intruments array, render the next one.
			if (wordIndex <= (instruments.length -1)) {
				document.querySelector("#letters").innerHTML = instruments[wordIndex]; 
			} else {
				document.querySelector("#result-message").innerHTML = "You lose!"
			}
		}

renderWord();


	


//create a score keeper that decrements with incorrect guesses.

//create a counter that increments with each keyed letter.



//display to user blank fields that match the number of letters.

//capture user inputs with keyup.

//if user keys a letter contained in the word, display the letter and
//increment score.

//if user keys a letter not in word, decrement score keeper.

//if score keeper reaches 0, end game and alert "you lose".

//if all letters are selected for the word, alert "you win" and start game over. 