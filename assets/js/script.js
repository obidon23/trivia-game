// VARIABLES==============================

var ledZeppelin = [
	
	 {
		question: "Who played drums for Led Zeppelin?",
		answer1: "Jimmy Page",
		answer2: "Robert Plant",
		answer3: "John Paul Jones",
		answer4: "John Bonham",
		correctAnswer: "John Bonham",
		factoid: "John Bonham died in 1980 and the remaining members decided to disband rather than replace him."
	},

	{
		question: "What is the first song on Led Zeppelin III?",
		answer1: "Kashmir",
		answer2: "Immigrant Song",
		answer3: "Achille's Last Stand",
		answer4: "Thank You",
		correctAnswer: "Immigrant Song",
		factoid: "Bron-Yr-Aur Stomp references the remote Welsh cottage where most of the tracks were written"
	},
	 {
		question: "What song charted highest for Led Zeppelin?",
		answer1: "Stairway to Heaven",
		answer2: "Whole Lotta Love",
		answer3: "Misty Mountain Hop",
		answer4: "Rock and Roll",
		correctAnswer: "Whole Lotta Love",
		factoid: "Whole Lotta Love, one of the few songs released as singles,  peaked at #2 on the Billboard Hot 100."
	},

	 {
		question: "Who was the youngest member of Led Zeppelin?",
		answer1: "Jimmy Page",
		answer2: "Robert Plant",
		answer3: "John Paul Jones",
		answer4: "John Bonham",
		correctAnswer: "Robert Plant",
		factoid: "Robert was just 19 when the band formed. Plant also suggested using John Bonham as drummer."
	},

	{
		question: "In what year did Led Zeppelin's debut album get released?",
		answer1: "1967",
		answer2: "1968",
		answer3: "1969",
		answer4: "1970",
		correctAnswer: "1969",
		factoid: "Led Zeppelin was released in January in the USA, while Led Zepellin II came out later that year in October."
	},
];
	var currentObject = 0;
	var currentQuestion = ledZeppelin[currentObject].question;
	var currentAnswer1  = ledZeppelin[currentObject].answer1;
	var currentAnswer2 = ledZeppelin[currentObject].answer2;
	var currentAnswer3 = ledZeppelin[currentObject].answer3;
	var currentAnswer4 = ledZeppelin[currentObject].answer4;
	var currentCorrectAnswer = ledZeppelin[currentObject].correctAnswer;
	var currentFactoid = ledZeppelin[currentObject].factoid;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	// var questionCount = 0;
	var counter = 20;
	var interval;
	var answerGuessed;

//FUNCTIONS====================================
function startGame() {
	currentObject = 0;
	$("#countdown").html("<p>Seconds Remaining: " + counter + " </p>");
	nextQuestion();
}

function nextQuestion() {
	console.log(currentObject);
	if (currentObject > ledZeppelin.length-1) {
		finalScore();
	} 
	else {
	currentQuestion = ledZeppelin[currentObject].question;
	currentAnswer1  = ledZeppelin[currentObject].answer1;
	currentAnswer2 = ledZeppelin[currentObject].answer2;
	currentAnswer3 = ledZeppelin[currentObject].answer3;
	currentAnswer4 = ledZeppelin[currentObject].answer4;
	currentCorrectAnswer = ledZeppelin[currentObject].correctAnswer;
	currentFactoid = ledZeppelin[currentObject].factoid;
	counter = 21;



	// currentQuestion = key.question;
	$("#question").html("<label>" + currentQuestion + "</label>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer1 + "'></> <label>"+currentAnswer1+"</label>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer2 + "'></> <label>"+currentAnswer2+"</label>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer3 + "'></> <label>"+currentAnswer3+"</label>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer4 + "'></> <label>"+currentAnswer4+"</label>")
		.append("<br/><button type='submit' value='submit' id='submit' class='btn btn-info'>SUBMIT</button>");
		}

	interval = setInterval(function() {
			
    	counter--;
    	// Display 'counter' wherever you want to display it.
	    if (counter === 0) {
        // Display a login box
    	    $("#countdown").html("<p>Time's Up!</p>");
        	clearInterval(interval);
    		console.log("next question");
    		
        	checkAnswer();
    	}

	    else {	$("#countdown").html("<p>Seconds Remaining: " + counter + "</p>");
		}
	}, 1000);	
		var submitButton = $("#submit");
		submitButton.on("click", checkAnswer);

}



function checkAnswer() {
		var answerGuessed = $('input[type="radio"]:checked').val();
		console.log(answerGuessed);


	if (answerGuessed === currentCorrectAnswer) {

		correctAnswers++;
		
		$("#question").html("<p class='correct'>Correct!</p>");
		if (currentObject === ledZeppelin.length-1) {
			finalFactoid();
		}
		else {
			factoid();
		}
	} else {
		incorrectAnswers++;
		$("#question").html("<p class='wrong'>Wrong!</p>");
		if (currentObject===ledZeppelin.length-1) {
			finalFactoid();
		}
		else {	factoid();
		}
    	
	}
}

function factoid() {


	$("#question").append("<p>The correct answer was " + currentCorrectAnswer +".")
	.append("<p class='factoid'>" + currentFactoid + "</p>")
	.append('<br /> <button type="submit" id="continue" class="btn btn-success">Next Question</button>');
		currentObject++;
		// counter = 20;
		var continueButton = $("#continue");
		continueButton.on("click",  nextQuestion);
		clearInterval(interval);
		}

function finalFactoid() {
       	clearInterval(interval);

	$("#question").append("<p>The correct answer was " + currentCorrectAnswer +".")
	.append("<br /> <p>" + currentFactoid + "</p>")
	.append('<br /> <button type="submit" id="continue" class="btn btn-info">See Scores</button>');
		currentObject++;
		// counter = 20;
		var continueButton = $("#continue");
		continueButton.on("click", finalScore);
		}
function gameReset() {
	currentObject = 0;
	correctAnswers = 0;
	incorrectAnswers = 0;
	counter = 0;
	startGame();
}


function finalScore() {
	console.log("You had " +correctAnswers+ " correct answers!");
	$("#question").html("<h2>Your Results<h2>")
	.append("<p>Correct Answers: " + correctAnswers + "</p>")
	.append("<br /> <p> Wrong Answers: " + incorrectAnswers +"</p>");
	
	if (correctAnswers === ledZeppelin.length) {
		$("#question").append("<h2>Perfect Score!</h2>");
	}
	$("#question").append('<br /> <button type="submit" id="reset" class="btn btn-warning">New Game</button>');
		var resetButton = $("#reset");
		resetButton.on("click", gameReset);

}




//DOM==========================================
// $("#countdown").html("<p>Seconds Remaining: " + counter + " </p>");
// startGame();
// nextQuestion();

$("#start").on("click", function() {
	startGame();
});

$("#submit").on("click", function () {
	checkAnswer();
});

$("#continue").on("click", function () {
	nextQuestion();
});
$("#rset").on("click", function() {
	gameReset;
})
// timer();