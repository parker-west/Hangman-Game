console.log("this works")

//create an array of words
	var instruments = ["drums", "guitar", "bass", "keyboard"];

//variable to capture user guesses.
	var guess = [];

//select a word from the array for user to guess.
	//***started with a for loop but it will go through the whole array.
	function newWord(word) {
		for (i = 0; i > instruments.length; i++) {
		console.log(word[i]);	
		}
	};

	newWord(instruments);

	


//create a score keeper that decrements with incorrect guesses.

//create a counter that increments with each keyed letter.



//display to user blank fields that match the number of letters.

//capture user inputs with keyup.

//if user keys a letter contained in the word, display the letter and
//increment score.

//if user keys a letter not in word, decrement score keeper.

//if score keeper reaches 0, end game and alert "you lose".

//if all letters are selected for the word, alert "you win" and start game over. 