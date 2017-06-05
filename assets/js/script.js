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
	},
	 {
		question: "What song charted highest for Led Zeppelin?",
		answer1: "Stairway to Heaven",
		answer2: "Whole Lotta Love",
		answer3: "Misty Mountain Hop",
		answer4: "Rock and Roll",
		correctAnswer: "Whole Lotta Love",
	},

	 {
		question: "Who was the youngest member of Led Zeppelin?",
		answer1: "Jimmy Page",
		answer2: "Robert Plant",
		answer3: "John Paul Jones",
		answer4: "John Bonham",
		correctAnswer: "Robert Plant",
	},

	{
		question: "In what year did Led Zeppelin's debut album get released?",
		answer1: "1967",
		answer2: "1968",
		answer3: "1969",
		answer4: "1970",
		correctAnswer: "1969",
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
	var counter = 5;
	var gameRunning = true;


//FUNCTIONS====================================


function nextQuestion() {
	if (currentObject > ledZeppelin.length-1) {
		finalScore();
	} else {
	currentQuestion = ledZeppelin[currentObject].question;
	currentAnswer1  = ledZeppelin[currentObject].answer1;
	currentAnswer2 = ledZeppelin[currentObject].answer2;
	currentAnswer3 = ledZeppelin[currentObject].answer3;
	currentAnswer4 = ledZeppelin[currentObject].answer4;
	currentCorrectAnswer = ledZeppelin[currentObject].correctAnswer;
	currentFactoid = ledZeppelin[currentObject].factoid;

	var interval = setInterval(function() {
			
    	counter--;
    	// Display 'counter' wherever you want to display it.
	    if (counter === 0) {
        // Display a login box
    	    $("#countdown").html("<p>Time's Up!</p>");
        	clearInterval(interval);
    		console.log("next question");
    		counter = 5;
    		currentObject++;
        	factoid();
    	}

	    else {	$("#countdown").html("<p>Seconds Remaining: " + counter + "</p>");
		}
	}, 1000);	

	// currentQuestion = key.question;
	$("#question").html("<label>" + currentQuestion + "</label>")
		.append("<br/><input type='radio' name = " +currentQuestion +"  value='" + currentAnswer1 +"'>" + currentAnswer1 + "<checked>")
		.append("<br/><input type='radio' name = " + currentQuestion + "value='" + currentAnswer2 +"'>" + currentAnswer2 + "</>")
		.append("<br/><input type='radio' name = " +currentQuestion +"  value='" + currentAnswer3 +"'>" + currentAnswer3 + "<checked>")
		.append("<br/><input type='radio' name = " + currentQuestion + "value='" + currentAnswer4 +"'>" + currentAnswer4 + "</>")
		.append("<br/><input type='submit' value='submit' id='return answerCheck()' class='btn btn-success submit'/>");
	}
}

function answerChecker() {
	var radio1 = document.getElementById(currentAnswer1).checked;
	var radio2 = document.getElementById(currentAnswer2).checked;
	var radio3 = document.getElementById(currentAnswer3).checked;
	var radio4 = document.getElementById(currentAnswer4).checked;

	if (radio1 === currentCorrectAnswer||radio2 === currentCorrectAnswer||radio3 === currentCorrectAnswer||radio4 === currentCorrectAnswer) {

		correctAnswers++;
		
		$("#question").html("Correct!");
		factoid();
	} else {
		incorrectAnswers++;
		$("#question").html("Wrong!");
		factoid();
	}
}

function factoid() {
	var interval2 = setInterval(function() {
 	$("#question").append("The answer was " + currentCorrectAnswer).append("<br /> <p>" + currentFactoid + ".</p>"
 		);
    		}, 3000);
	nextQuestion();
}

function finalScore() {
	gameRunning === false;

	if (gameRunning = false) {
	$("#question").html("<h2>Your Results<h2>").append("<p>Correct Answers: " + correctAnswers + "</p>").append("<br /> <p> Wrong Answers: " + incorrectAnswers +"</p>");
	}
}	



//DOM==========================================
$("#countdown").html("<p>Seconds Remaining: " + counter + " </p>");
nextQuestion();
// timer();

