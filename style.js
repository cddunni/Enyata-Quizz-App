const quiz = document.querySelector('.question');
const option = document.querySelector('.options');
const skip = document.querySelector('#skip');
const next = document.querySelector('#next');


const questions = [
    {
		 id: 1,
		question :  'What should values always be enclosed in?',
		options : 
			{
			 a: "Commas", 
			 b:"Quotation marks", 
			 c:"&lt;scripting&gt", 
			 d:"Parenthesis"
			},
		answer:"Commas"
	},
	{
		id: 1,
	   question :  'What should values always be enclosed in?',
	   options : 
		   {
			a: "Commas", 
			b:"Quotation marks", 
			c:"&lt;scripting&gt", 
			d:"Parenthesis"
		   },
	   answer:"Commas"
   },
   {
		id: 1,
		question :  'What should values always be enclosed in?',
		options : 
		{
			a: "Commas", 
			b:"Quotation marks", 
			c:"&lt;scripting&gt", 
			d:"Parenthesis"
		},
		answer:"Commas",
	},
	{
		id: 1,
   		question :  'What should values always be enclosed in?',
   		options : 
	   	{
			a: "Commas", 
			b:"Quotation marks", 
			c:"&lt;scripting&gt", 
			d:"Parenthesis"
	   	},
  		answer:"Commas"
	},
 ] 


//function build the quiz


const showQuestion = () => {
	const output = [];
	const answer = '';

	//loop through questions
	questions.forEach((question, number) => {
		//add radio button
		answers.push(
			`<label>
				<input type="radio" name="question${number}" value="${}
			</label>`
		)
	})

} 