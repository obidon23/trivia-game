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
		factoid: "&quot;Bron-Yr-Aur Stomp&quot; references the remote Welsh cottage where most of the tracks were written"
	},
	 {
		question: "What song charted highest for Led Zeppelin?",
		answer1: "Stairway to Heaven",
		answer2: "Whole Lotta Love",
		answer3: "Misty Mountain Hop",
		answer4: "Rock and Roll",
		correctAnswer: "Whole Lotta Love",
		factoid: "&quot;Whole Lotta Love&quot;, one of the few songs released as singles,  peaked at #2 on the Billboard Hot 100."
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
		factoid: "&quot;Led Zeppelin&quot; was released in January in the USA, while &quot;Led Zepellin II&quot; came out later that year in October."
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
	var counter = 10;
	var interval;
	var answerGuessed;
	var audio;

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
	counter = 11;



	// currentQuestion = key.question;
	$("#question").html("<label>" + currentQuestion + "</label>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer1 + "id='fullAnswerClick'></> <label value='" + currentAnswer1 + "' class='answer'>"+currentAnswer1 + "</label>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer2 + "id='fullAnswerClick'></> <label value='" + currentAnswer2 + "' class='answer'>"+currentAnswer2 + "</label>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer3 + "id='fullAnswerClick'></> <label value='" + currentAnswer3 + "' class='answer'>"+currentAnswer3 + "</label>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer4 + "id='fullAnswerClick'></> <label value='" + currentAnswer4 + "' class='answer'>"+currentAnswer4 + "</label>")
		// .append("<br/><button type='submit' value='submit' for='fullAnswerClick' id='submit' class='btn btn-info'>SUBMIT</button>")
		;
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
		// var submitButton = $("#submit");
		// submitButton.on("click", checkAnswer);
		$(".answer").on("click", function() { 
			answerGuessed = $(this).attr("value"); 
			checkAnswer();
		});
}

function checkAnswer() {
		console.log(answerGuessed);
		$(".timer").html("You answered: " + answerGuessed);

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
		else { factoid();
		}
    	
	}
}

function factoid() {


	$("#question").append("<p>The correct answer was " + currentCorrectAnswer +".")
	.append("<p class='factoid'>" + currentFactoid + "</p>")
	.append('<br /> <button type="submit" id="continue" class="btn btn-success btn-lg">Next Question</button>');
		currentObject++;
		// counter = 20;
		var continueButton = $("#continue");
		continueButton.on("click",  nextQuestion);
		clearInterval(interval);
		}

function finalFactoid() {
       	clearInterval(interval);

	$("#question").append("<p>The correct answer was " + currentCorrectAnswer +".")
	.append("<br /> <p class='factoid'>" + currentFactoid + "</p>")
	.append('<br /> <button type="submit" id="continue" class="btn btn-info btn-lg">See Scores</button>');
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
	// audio.pause();
	// audio.load();
	startGame();
}


function finalScore() {
	console.log("You had " +correctAnswers+ " correct answers!");
	totalAnswers = correctAnswers + incorrectAnswers
	$("#question").html("<h2>Your Results: You went " + correctAnswers + " for " + totalAnswers +" !</h2>" );
	// .append("<p>Correct Answers: " + correctAnswers + "</p>")
	// .append("<br /> <p> Wrong Answers: " + incorrectAnswers +"</p>");
	
	if (correctAnswers === ledZeppelin.length) {
		$("#question").append("<h2>You climbed the Stairway to Heaven!</h2>").append("<img src='assets/images/zoso.jpg' class='image'>")
		append('<iframe width="560" height="0" src="https://www.youtube.com/embed/IS6n2Hx9Ykk?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1&start=465" frameborder="0"></iframe>');
		// audio = new Audio("https://www.youtube.com/embed/LdNiT3xDDhA?start=351");
		// audio.play();

	} else if (correctAnswers <= 1) {
		$("#question").append("<h2>You must be Dazed and Confused!</h2>").append("<img src='assets/images/hindenburg.jpg' class='image'>");
		// audio = new Audio("https://www.youtube.com/embed/IS6n2Hx9Ykk?start=465");
		// audio.play();

	} else {
		$("#question").append("<h2>We have a Communication Breakdown!</h2>").append("<img src='assets/images/breakdown.jpg' class='image'>");

		// audio = new Audio("https://www.youtube.com/embed/3EH7QMVnSRI/?start=115");
		// audio.play();

	}
	$("#question").append('<br /> <button type="submit" id="reset" class="btn btn-warning btn-lg">New Game</button>');

		resetButton = $("#reset");
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