// VARIABLES==============================

var ledZeppelin = {
	
	"question1": {
		question: "Who played drums for Led Zeppelin?",
		answer1: "Jimmy Page",
		answer2: "Robert Plant",
		answer3: "John Paul Jones",
		answer4: "John Bonham",
		correctAnswer: "John Bonham",
	},

	"question2": {
		question: "What is the first song on Led Zeppelin 3?",
		answer1: "Kashmir",
		answer2: "Immigrant Song",
		answer3: "Achille's Last Stand",
		answer4: "Thank You",
		correctAnswer: "Immigrant Song",
	},
	"question3": {
		question: "What song charted highest for Led Zeppelin?",
		answer1: "Stairway to Heaven",
		answer2: "Whole Lotta Love",
		answer3: "Misty Mountain Hop",
		answer4: "Rock and Roll",
		correctAnswer: "Whole Lotta Love",
	},

	"question4": {
		question: "Who was the youngest member of Led Zeppelin",
		answer1: "Jimmy Page",
		answer2: "Robert Plant",
		answer3: "John Paul Jones",
		answer4: "John Bonham",
		correctAnswer: "Robert Plant",
	},

	"question5": {
		question: "In what year did Led Zeppelin's debut album get released?",
		answer1: "1967",
		answer2: "1968",
		answer3: "1969",
		answer4: "1970",
		correctAnswer: "1971",
	},
}
	var currentQuestionPage = ledZeppelin.question1;
	var currentQuestion = ledZeppelin.question1.question;
	var currentAnswer1  = ledZeppelin.question1.answer1;
	var currentAnswer2 = ledZeppelin.question1.answer2;
	var currentAnswer3 = ledZeppelin.question1.answer3;
	var currentAnswer4 = ledZeppelin.question1.answer4;
	var currentCorrectAnswer = ledZeppelin.question1.correctAnswer;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var questionCount = 0;

var counter = 20;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter == 0) {
        // Display a login box
        $("#countdown").html("<p>Time's Up!</p>")
        clearInterval(interval);
    }

    else {	$("#countdown").html("<p>Seconds Remaining: " + counter + "</p>");
}
}, 1000);

//FUNCTIONS====================================

function nextQuestion() {

	currentQuestionPage = ledZeppelin.key++;
	$("#question").html(currentQuestion).append("<br/><input type='radio' value='" + currentAnswer1 +"'>" + currentAnswer1).append("<br/><input type='radio' value='" + currentAnswer2 +"'>" + currentAnswer2).append("<br/><input type='radio' value='" + currentAnswer3 +"'>" + currentAnswer3).append("<br/><input type='radio' value='" + currentAnswer4 +"'>" + currentAnswer4);
}
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
console.log(currentQuestionPage);