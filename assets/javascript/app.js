$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
/*
 {
			 						
	}
*/
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'The Fantastic Four have the headquarters in what building?',
	possibleAnswers : ['A. Stark Tower',
				 'B. Fantastic HQ',
				 'C. Baxter Building',
				 'D. Xavier Institute'],
	flags : [false, false, true, false],
	answer : 'C. Baxter Building'
};

var q2 = {
	question: 'Peter Parker works as a photographer for:',
	possibleAnswers: ['A. The Daily Planet',
				 'B. The Daily Bugle',
				 'C. The New York Times',
				 'D. The Rolling Stones'],
	flags : [false, true, false, false],
	answer : 'B. The Daily Bugle'
};

var q3 = {
	question : 'S.H.I.E.L.D.s highest ranking agent is:',
	possibleAnswers : ['A. Nick Fury',
				 'B. Steven Rogers',
				 'C. Peter Parker',
				 'D. Natalia Romanov'],
	flags : [true, false, false, false],
	answer : 'A. Nick Fury'
};

var q4 = {
	question : 'Captain America was frozen in which war?',
	possibleAnswers : ['A. WWI',
				 'B. WWII',
				 'C. The Cold War',
				 'D. The American Civil War'],
	flags : [false, true, false, false],
	answer : 'B. WWII'
};

var q5 = {
	question : 'Ghost Rider is known as:',
	possibleAnswers : ['A. The Guardian Devil',
				 'B. The Spirit of Hate',
				 'C. The Spirit of Vengeance',
				 'D. The Red Skull'],
	flags : [false, false, true, false],
	answer : 'C. The Spirit of Vengeance'
};

var q6 = {
	question : 'Deadpool joined the Weapon X program because:',
	possibleAnswers : ['A. He had incurable cancer',
				 'B. He was forced to',
				 'C. He thought it would be funny',
				 'D. He wanted to fight for justice'],
	flags : [true, false, false, false],
	answer : 'A. He had incurable cancer'
};

var q7 = {
	question : 'What did Dr. Pym discover that allowed him to change size?',
	possibleAnswers : ['A. Gamma Rays',
				 'B. Pym Particles',
				 'C. Alpha Rays',
				 'D. Omega Particles'],
	flags : [false, true, false, false],
	answer : 'B. Pym Particles'
};

var q8 = {
	question : 'What vehicle is the Avengers primary mode of transport?',
	possibleAnswers : ['A. The Avengers Bus',
				 'B. The Quinjet',
				 'C. The Blackbird',
				 'D. The Blackhawk'],
	flags : [false, true, false, false],
	answer : 'B. The Quinjet'
};

var q9 = {
	question : 'Iceman is a member of which team?',
	possibleAnswers : ['A. The X-Men',
				 'B. The Fantastic Four',
				 'C. The Invaders',
				 'D. The Beatles'],
	flags : [true, false, false, false],
	answer : 'A. The X-Men'
};

var q10 = {
	question : 'What was Wolverines name when he was a Horseman of Apocalypse?',
	possibleAnswers : ['A. Rage',
				  'B. Death',
				  'C. Destruction',
				  'D. Oblivion'],
	flags : [false, true, false, false],
	answer : 'B. Death'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

//	});

//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});
});