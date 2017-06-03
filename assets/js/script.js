// VARIABLES==============================

var ledZeppelin = [
	
	 {
		question: "Who played drums for Led Zeppelin?",
		answer1: "Jimmy Page",
		answer2: "Robert Plant",
		answer3: "John Paul Jones",
		answer4: "John Bonham",
		correctAnswer: "John Bonham",
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
]
	var currentQuestionPage = ledZeppelin[0];
	var currentQuestion = 0
	var currentAnswer1  = ledZeppelin[0].answer1;
	var currentAnswer2 = ledZeppelin[0].answer2;
	var currentAnswer3 = ledZeppelin[0].answer3;
	var currentAnswer4 = ledZeppelin[0].answer4;
	var currentCorrectAnswer = ledZeppelin[0].correctAnswer;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var questionCount = 0;
	var counter = 5;



//FUNCTIONS====================================
// function timer() {
// 	var interval = setInterval(function() {
//     	counter--;
//     	// Display 'counter' wherever you want to display it.
// 	    if (counter === 0) {
//         // Display a login box
//     	    $("#countdown").html("<p>Time's Up!</p>")
//         	clearInterval(interval);
//     	}

// 	    else {	$("#countdown").html("<p>Seconds Remaining: " + counter + "</p>");
// 		}
// 	}, 1000);

// 	nextQuestion();
// }

function nextQuestion() {

	var interval = setInterval(function() {
			
    	counter--;
    	// Display 'counter' wherever you want to display it.
	    if (counter === 0) {
        // Display a login box
    	    $("#countdown").html("<p>Time's Up!</p>");
        	clearInterval(interval);
    		console.log("next question");
    		counter = 5;
        	// nextQuestion();
    	}

	    else {	$("#countdown").html("<p>Seconds Remaining: " + counter + "</p>");
		}
	}, 1000);	

	// currentQuestion = key.question;
	$("#question").html("<label>" + ledZeppelin[currentQuestion]+ "</label>")
		.append("<br/><input type='radio' name = " +currentQuestion +"  value='" + currentAnswer1 +"'>" + currentAnswer1 + "<checked>")
		.append("<br/><input type='radio' name = " + currentQuestion + "value='" + currentAnswer2 +"'>" + currentAnswer2 + "</>")
		.append("<br/><input type='radio' name = " +currentQuestion +"  value='" + currentAnswer3 +"'>" + currentAnswer3 + "<checked>")
		.append("<br/><input type='radio' name = " + currentQuestion + "value='" + currentAnswer4 +"'>" + currentAnswer4 + "</>");
}


$(function() {
	$('#submitAnswer').submit(function() {
		playerGuess = $('input(value)').val();
		console.log("Player guessed " + playerGuess);
		return false;
	})
});


$("#submitAnswer").on("submit", function(e) {

	if (this.value === correctAnswer) {
		questionCount++;
		correctAnswers++;
		
		$("#question").html("Correct!");
		nextQuestion();
	} else {
		questionCount++;
		incorrectAnswers++;
		$("#question").html("Wrong!");
		nextQuestion();
	}
})



//DOM==========================================
$("#countdown").html("<p>Seconds Remaining: " + counter + " </p>");
nextQuestion();
// timer();

console.log(currentQuestionPage);
console.log(currentCorrectAnswer);