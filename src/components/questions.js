console.log("here")

class Question{
  // debugger
  constructor(question){
    this.id = question.id
    this.correct_anwser = question.correct_anwser
    this.incorrect_answer = question.incorrect_answer
    this.question = question.question
    Question.all.push(this)
    }
    // debugger
//
   renderCurrentQuestion() {
     // debugger
     console.log(this)
     // current object being called on this
   return

    let innerQuestion = document.getElementById("question-text").innerText = question.question;
    // produces the string question

    const incorrectOptions = question.incorrect_answer.replace(/]|"|"|/g,"").substring(1).split(',');
    // produces an array of incorrect answers
    // console.log(incorrectOptions)
    let correctAnswer = question.correct_anwser;
    // displays the right choice

    let answerSpace = Math.floor(Math.random() * 3) + 1;


    // returns a random integer between 0 -> 4

    let currentScore = calculateScore(correctCount, questionCounter)
    // setting player's current score to  a percent
    function calculateScore(totalCorrect, numQuestions ) {
      return ((correctCount/questionCounter) * 100).toFixed(1);
    }

    const optionsArray = incorrectOptions.splice(answerSpace -1,0,correctAnswer);
    // randomizing choice selections


    incorrectOptions.forEach((choice,index) => {
      question ['choice' + (index +1)] = choice;
    });
    // iterating throughout the options

    console.log(incorrectOptions)

    choiceArray.forEach(choice =>{
      const number = choice.dataset['number']
      choice.innerText = question['choice' + number]
    });

  	choiceArray.forEach((choice) => {
		 choice.addEventListener("click",function(e){
       console.log('clicked on an option')

		    if(e.target.innerText == correctAnswer){
                console.log("sup");
                ++correctCount;X
                getQuestions(++questionCounter)
                currentScore = calculateScore(correctCount, questionCounter)
                console.log(questionCounter)
                document.getElementById("score-output").innerText = `Score ${currentScore} `+"%" ;
                // alert("Correct")


        }
        else{
            document.getElementById("score-output").innerText = `Score ${currentScore}`+"%";
            // alert("Try Again");
            this.question.isEnded()

        }
 		   });
       choice.addEventListener("click", function(e){
         if(e.target.innerText == correctAnswer){
           getQuestions(++questionCounter);
         }
         else{
           alert("Try Again")
         }
       })
     });



      function isEnded(){
       this.questionCounter === this.question.length
        }

};


}

Question.all = [];
