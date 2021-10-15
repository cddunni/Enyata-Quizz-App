const quiz = document.querySelector('.question');
const options = document.querySelector('.options');
const skip = document.querySelector('#skip');
const next = document.querySelector('#next');
const questionElement = document.querySelector('#quest')
import {quizQuestions} from "./questions.js";



//function build the quiz

let currentQuestion = quizQuestions[0];


const showQuestion = () => {

	questionElement.innerText = currentQuestion.question
		let answers = ''
		for(let option in currentQuestion.options)	{	
			
			
			
		//add radio button
		// console.log(option)
		// console.log(currentQuestion.options[option])
		answers+=
			`<li class='answers'>
				<label>
					<input type="radio" value="options" name="quest">
					${option}:
					${currentQuestion.options[option]}
				</label>
			</li>`
		}
		options.innerHTML = answers
}

showQuestion();

//next button


const nextQuestion = () => {
	const previousIndex = quizQuestions.indexOf(currentQuestion);
	if (previousIndex == quizQuestions.length - 1) {
	next.textContent = 'Submit';
		return;
	}
	currentQuestion = quizQuestions[previousIndex + 1]
	showQuestion();
	console.log(previousIndex);
	
}
next.addEventListener('click', nextQuestion);


const prevQuestion = () => {
	const previousIndex = quizQuestions.indexOf(currentQuestion);
	if (previousIndex == 0) return;
	currentQuestion = quizQuestions[previousIndex - 1];
	showQuestion();
	console.log(previousIndex);
}
prev.addEventListener('click', prevQuestion);

//Validate correct answers
const answerContainers = document.querySelectorAll('.answers')
console.log(answerContainers)
let numCorrect = 0;
quizQuestions.forEach((currentQuestion, index) => {
	const answerContainer = answerContainers[index];
	console.log(answerContainer)
	const selector = `input[name=question${index}]:checked`;
	console.log(selector)
	const userAnswer = (answerContainer.querySelector("selector") || {}).value;

	if (userAnswer === currentQuestion.correctAnswer) {
		numCorrect++;
		answerContainers[index].style.color = 'lightgreen';
	}else {
		// answerContainers[index].style.color ='red'
	}
});


