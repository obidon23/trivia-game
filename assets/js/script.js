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
		question: "What is the first song on Led Zeppelin 3?",
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
		question: "Who was the youngest member of Led Zeppelin",
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



//FUNCTIONS====================================


function nextQuestion() {
	if (currentObject > ledZeppelin.length-1) {
		finalScore();
	} else {
	console.log(currentObject);
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
        	nextQuestion();
    	}

	    else {	$("#countdown").html("<p>Seconds Remaining: " + counter + "</p>");
		}
	}, 1000);	

	// currentQuestion = key.question;
	$("#question").html("<label>" + currentQuestion + "</label>")
		.append("<br/><input type='radio' name = " +currentQuestion +"  value='" + currentAnswer1 +"'>" + currentAnswer1 + "<checked>")
		.append("<br/><input type='radio' name = " + currentQuestion + "value='" + currentAnswer2 +"'>" + currentAnswer2 + "</>")
		.append("<br/><input type='radio' name = " +currentQuestion +"  value='" + currentAnswer3 +"'>" + currentAnswer3 + "<checked>")
		.append("<br/><input type='radio' name = " + currentQuestion + "value='" + currentAnswer4 +"'>" + currentAnswer4 + "</>");
	}
}

$("#submitAnswer").on("submit", function(e) {

	if (radio.value === correctAnswer) {

		correctAnswers++;
		
		$("#question").html("Correct!");
		nextQuestion();
	} else {
		incorrectAnswers++;
		$("#question").html("Wrong!");
		nextQuestion();
	}
})

// function finalScore() {
// 	$("#question").html.("<h2>Your Results<h2>").append("<p>Correct Answers: " + correctAnswers + "</p>").append("<br /> <p> Wrong Answers: " + incorrectAnswers +"</p>");
// }

//DOM==========================================
// var interval2 = setInterval(function() {
//  	$("#question").html("The answer was " + currentCorrectAnswer).append("<br />" + currentFactoid);
//     		}, 3000);
$("#countdown").html("<p>Seconds Remaining: " + counter + " </p>");
nextQuestion();
// timer();

console.log(currentCorrectAnswer);