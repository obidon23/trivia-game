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
<<<<<<< HEAD
	var counter = 20;
	var interval;
=======
	var counter = 5;
	var gameRunning = true;
>>>>>>> ac81e180a230a344f78ba11d78d08a283edd0f7f
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
<<<<<<< HEAD
	} 
	else {
=======
	} else {
>>>>>>> ac81e180a230a344f78ba11d78d08a283edd0f7f
	currentQuestion = ledZeppelin[currentObject].question;
	currentAnswer1  = ledZeppelin[currentObject].answer1;
	currentAnswer2 = ledZeppelin[currentObject].answer2;
	currentAnswer3 = ledZeppelin[currentObject].answer3;
	currentAnswer4 = ledZeppelin[currentObject].answer4;
	currentCorrectAnswer = ledZeppelin[currentObject].correctAnswer;
	currentFactoid = ledZeppelin[currentObject].factoid;
<<<<<<< HEAD
	counter = 21;



	// currentQuestion = key.question;
	$("#question").html("<label>" + currentQuestion + "</label>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer1 + "'>" + currentAnswer1 + "</>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer2 + "'>" + currentAnswer2 + "</>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer3 + "'>" + currentAnswer3 + "</>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer4 + "'>" + currentAnswer4 + "</>")
		.append("<br/><button type='submit' value='submit' id='submit' class='btn'>SUBMIT</button>");
		}

	interval = setInterval(function() {
=======

	var interval = setInterval(function() {
>>>>>>> ac81e180a230a344f78ba11d78d08a283edd0f7f
			
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

<<<<<<< HEAD
}



function checkAnswer() {
		var answerGuessed = $('input[type="radio"]:checked').val();
		console.log(answerGuessed);


	if (answerGuessed === currentCorrectAnswer) {
=======
	// currentQuestion = key.question;
	$("#question").html("<label>" + currentQuestion + "</label>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer1 + "'>" + currentAnswer1 + "</>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer2 + "'>" + currentAnswer2 + "</>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer3 + "'>" + currentAnswer3 + "</>")
		.append("<br/><input type='radio' name = '" + currentQuestion + "' value='" + currentAnswer4 + "'>" + currentAnswer4 + "</>")
		.append("<br/><input type='submit' value='submit' id='return answerCheck()' class='btn'/>");
	}
}
function get() {
	answerGuessed;
	if (document.f.status[0].checked){
		document.f.status[0].value;
		console.log(answerGuessed);
	} 
	else if (document.f.status[1].checked){
		document.f.status[1].value;
		console.log(answerGuessed);
	}
	else if (document.f.status[2].checked){
		document.f.status[2].value;
		console.log(answerGuessed);
	}
	else if (document.f.status[3].checked){
		document.f.status[3].value;
		console.log(answerGuessed);
	}
	else {
		incorrectAnswers++;
		nextQuestion();
	}
}

function checkAnswer() {

	if (answerGuessed === currentCorrectAnswer||answerGuessed === currentCorrectAnswer||answerGuessed === currentCorrectAnswer||answerGuessed === currentCorrectAnswer) {
>>>>>>> ac81e180a230a344f78ba11d78d08a283edd0f7f

		correctAnswers++;
		
		$("#question").html("Correct!");
<<<<<<< HEAD
		if (currentObject === ledZeppelin.length-1) {
			finalFactoid();
		}
		else {
			factoid();
		}
	} else {
		incorrectAnswers++;
		$("#question").html("Wrong!");
		if (currentObject===ledZeppelin.length-1) {
			finalFactoid();
		}
		else {	factoid();
		}
    	
	}
}

function factoid() {


	$("#question").append("<p>The correct answer was " + currentCorrectAnswer +".").append("<br /> <p>" + currentFactoid + "</p>").append('<br /> <button type="submit" id="continue">Next Question</button>');
		currentObject++;
		// counter = 20;
		var continueButton = $("#continue");
		continueButton.on("click",  nextQuestion);
		clearInterval(interval);
		}

function finalFactoid(x) {
       	clearInterval(interval);

	$("#question").append("<p>The correct answer was " + currentCorrectAnswer +".").append("<br /> <p>" + currentFactoid + "</p>").append('<br /> <button type="submit" id="continue">See Scores</button>');
		currentObject++;
		// counter = 20;
		var continueButton = $("#continue");
		continueButton.on("click", finalScore);
		}



function finalScore() {
	console.log(correctAnswers);
	$("#question").html("<h2>Your Results<h2>").append("<p>Correct Answers: " + correctAnswers + "</p>").append("<br /> <p> Wrong Answers: " + incorrectAnswers +"</p>");
	
	if (correctAnswers === ledZeppelin.length) {
		("#question").append("<h2>Perfect Score!</h2>");
	}

}



=======
		counter = 60;
    	currentObject++;
		nextQuestion();
	} else {
		incorrectAnswers++;
		$("#question").html("Wrong!");
		counter = 60;
    	currentObject++;
    	nextQuestion();
	}
}

// function factoid() {
// 	var interval2 = setInterval(function() {
//  	$("#question").append("The answer was " + currentCorrectAnswer).append("<br /> <p>" + currentFactoid + ".</p>"
//  		);
//     		}, 3000);
// 	nextQuestion();
// }
>>>>>>> ac81e180a230a344f78ba11d78d08a283edd0f7f

function finalScore() {
	$("#question").html("<h2>Your Results<h2>").append("<p>Correct Answers: " + correctAnswers + "</p>").append("<br /> <p> Wrong Answers: " + incorrectAnswers +"</p>");

}	



//DOM==========================================
<<<<<<< HEAD
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
// timer();
=======
$("#countdown").html("<p>Seconds Remaining: " + counter + " </p>");
nextQuestion();
// timer();

>>>>>>> ac81e180a230a344f78ba11d78d08a283edd0f7f
