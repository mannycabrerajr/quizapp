// array of objects to store quiz answers
var quiz = [
	{
		question: "Great Salt Lake is located in what U.S. state?",
		answer: "Utah"
	},
	{
		question: "If you cross the northern border of the US, in what country are you?",
		answer: "Canada"
	},
	{
		question: "Spain borders which ocean?",
		answer: "Atlantic"
	},
	{
		question: "The harpsichord is the classical ancestor of what musical instrument?",
		answer: "Piano"
	},
	{
		question: "The norse god Thor often defeated giants with what kind of weapon?",
		answer: "Hammer"
	},
	{
		question: "What does a botanist study?",
		answer: "Plants"
	},
	{
		question: "What planet is closest to the sun?",
		answer: "Mercury"
	},
]

for(var i = 0; i < quiz.length; i = i+1){
	// loop chronologically through questions form "quiz"
	var fifthGradeQ = quiz[i].question
	// get element "question" from index page and assign it content from fifthGrade...which is list of questions
	document.getElementById('question' + [i]).textContent = fifthGradeQ
}


// click on button for findOut
function findOut(){
	for(var i = 0; i < quiz.length; i = i+1){
		// loop chronologically through answers form "quiz"
		var fifthGradeA = quiz[i].answer.toLowerCase()
		// the input in "answer" starting with first answer on index page
		var userInput = document.getElementById("answer" + [i]).value.toLowerCase()
		// input in "question" starting with first question..."question" is inputed by "fifthGradeQ" above
		var confirmation = document.getElementById('question' + [i])
		if(fifthGradeA == userInput) {
			// give "confirmation" (which is the question) the class "correct"...changes the color
			// correct++ moves down the form in numerical order
			//confirmation.className = 'correct'
			document.getElementById("result" + [i]).src = "img/correct.jpg"
			// if "userInput" is wrong, give "confirmation" (which is the question) the class "incorrect"...changes the question to red color
			// incorrect++ moves down the form in numerical order
		} else {
			//confirmation.className = 'incorrect'
			document.getElementById("result" + [i]).src = "img/incorrect.jpg"
		}
	}
}
