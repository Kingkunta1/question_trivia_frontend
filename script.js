
// What is the overall process
// deleting a question
// What is the cause of this
//  clicking action
// At what point should the cause happen
// After the questions have loaded

let questions = {};
let currentQuestion;
let numTries = numCorrect = 0;
let baseUrl = 'http://localhost:3000';


document.getElementById('show-ques').addEventListener('click', () => {
    fetch('http://localhost:3000/api/v1/questions')
        .then(res=>res.json())
        .then(json => questions = json)
        .then(()=> enableUI())
        .then(()=> nextQuestion());
        // gets the questions from the open ended api
        // Get fetch request
        // debugger
});


document.getElementById('get-new-questions').addEventListener('click', () => {
    fetch('http://localhost:3000/api/v1/new_questions')
        .then(res=>res.json())
        .then(json=> questions = json)
        .then(()=> enableUI())
        .then(()=> nextQuestion())
        // get the set of new questions after the old ones are finished
        // Get fetch request
});

["a", "b", "c", "d"].forEach(id=>{
    document.getElementById(id).addEventListener('click', ()=> {
        handleClick(id);
    })
    // applying click event on each answer choice
})

function enableUI(enable=true) {

    const goButton = document.getElementById('hidden-div');
    const welcome = document.getElementById('welcome-container');
    const questions = document.getElementById('question-container');
    const getNewButton = document.getElementById('get-new-questions');
    const deleteButton = document.getElementById('Delete-question');

    goButton.style.display = enable ? "none" : "block";
    welcome.style.display = enable ? "none" : "block";
    questions.style.display = enable ? "block" : "none";
    getNewButton.style.display = enable ? "none" : "inline";
    deleteButton.style.display = enable ? "block": "inline";
}

function nextQuestion() {
    if (currentQuestion == undefined) {
        currentQuestion = 0;
    } else {
        currentQuestion++;
    }

    if (currentQuestion > questions.length - 1) {
        enableUI(false);
        alert(`Thanks for playing!\n\nYour Score: ${(numCorrect / numTries * 100).toFixed(1)}%`);
        numTries = numCorrect = 0;
        currentQuestion = undefined;
        setScore({clearScore: true});
        return;
    }

    const questionContainer = document.getElementById('question-text');
    questionContainer.innerText = questions[currentQuestion].question;

    const answers = JSON.parse(questions[currentQuestion].incorrect_answer);
    const answerElementIDs = ["a", "b", "c", "d"];
    const answersElements = answerElementIDs.map(id=>document.getElementById(id));
    const randomPlace = Math.floor((Math.random() * 3));
    answers.splice(randomPlace, 0, questions[currentQuestion].correct_anwser);

    answersElements.forEach((ele, index)=>{
        ele.innerText = answers[index];
    })

}
function handleClick(choice) {
    numTries++;
    const chosenAnswer = document.getElementById(choice).innerText;
    const correct = chosenAnswer === questions[currentQuestion].correct_anwser;
    if (correct) {
        numCorrect++;
        setScore();
        nextQuestion();
    } else {
        setScore();
    }
}

function setScore(options = {}) {
    const scoreElement = document.getElementById('score-output');
    if (options.clearScore) {
        scoreElement.innerText = "";
    } else {
        scoreElement.innerText = (numCorrect / numTries * 100).toFixed(1) + '% Score'
    }
}

// debugger


// function deleteQuestion(){
  // const deleteButton = document.getElementById('Delete-question').addEventListener('click',deleteQuestion);
  // console.log("deleting question");
  //   fetch(baseUrl + '/questions/' + questions[currentQuestion].id,{
  //     // currentQuestion = # that identifies the question id
  //     method:'DELETE',
  //   })
  //   .then(resp => {
  //     return resp.json();
  //   })
  //   .then(data =>{
  //     this.parentNode.remove();
  //   })
  //   console.log("question deleted")
  //   // nextQuestion()
  // }


  function deleteQuestion(){

    document.getElementById('Delete-question').addEventListener('click', () => {
      fetch(baseUrl + '/questions/' + questions[currentQuestion].id,{
        // currentQuestion = # that identifies the question id
        method:'DELETE',
      })
      .then(resp => {
        return resp.json();
      })
      .then(()=> enableUI())
      .then(data =>{
        this.parentNode.remove();
      })
      console.log("question deleted")
      nextQuestion()
    });
  }

  deleteQuestion()
          // gets the questions from the open ended api
          // Get fetch request
          // debugger

//
