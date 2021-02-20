// 1. Make a fetch command to the backend to retrieve the json object that
// cotains an array of the Questions.
// using an array from apiSrc
//  url = apiSrc
//

let resultsContainer = document.getElementById('results');
const quesButton = document.getElementById("show-ques");
const submitButton = document.getElementById('submit-button');
const baseUrl = "http://localhost:3000/api/v1/questions";
let availableOptions = [];

// const orgIncorrect = question.incorrect_answer.replace(/]|"|"|/g,"").substring(1).split(',')
// const correctAnswer = question.correct_answer;
// const riddle = document.getElementById('riddle');
// const choices = Array.from(document.getElementsByClassName('choice-text'));
// let quesArray = [
//   new Question(question.question, orgIncorrect, correctAnswer);
//   const currentQuestion = {};
//   const score = 0;
//   const questionCounter = 0;
//   const availableQuestions = [];
//
//
// fetch('url')
// .then(function (resp){
//   return resp.json()
// })
// .then(function(arrayofObjects){console.log(arrayofObjects)})
// gameButton.addEventListener("click")
let questionCounter = 1;

quesButton.addEventListener("click",function(e){
  console.log("Test")
  getQuestions(questionCounter++);
})


//
// fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
// .then(res => res.json())
//   .then(questions => {
// //
//
    // const quesContainer = document.querySelector("#question-container")
//     console.log(questions)
//     questions.results.forEach(function(question) {
//
//           // console.log(question.question)
//           // iterating throughout the array of objects by using forEach which takes in a callback function and the question as the single objects.)
//           const newQuesElement = document.createElement('p')
//           // setting a new element = to <p>
//           newQuesElement.innerText = question.question
//           // setting the inner text on the new Element to an item's name from the array
//           quesContainer.appendChild(newQuesElement)
//           // adding the new element to the existing <div>
//         })
//
//       })
//     })

// this function is geting the readable json format that we can identify and use.

// fetch('http://localhost:3000/api/v1/questions')
// // this is the url source we are using to fetch
//
// .then(res => res.json())
// // response json becomes eligble for use to help code
// .then(questions => {
//   questions.forEach(question =>{console.log(question)}  )
// })
// })


function getQuestions(id){
  // console.log("hello")
  fetch(`http://localhost:3000/api/v1/questions/${id}`)
  .then(res => res.json())
  .then(question =>{
    console.log(question);
    // questions.forEach(question => {renderCurrentQuestion(question)} )
    renderCurrentQuestion(question);

  })
}

// getQuestions()


function renderCurrentQuestion(question){
  const newQuesElement = document.createElement("p");
  const quesContainer = document.getElementById('question-container');
  const realQuestion = {
    question:question.question
  };

  newQuesElement.innerText = realQuestion.question;
  quesContainer.appendChild(newQuesElement);

  const incorrectOptions = question.incorrect_answer.replace(/]|"|"|/g,"").substring(1).split(',');
  // console.log(incorrectOptions)
  let correctAnswer = question.correct_anwser;
  console.log(correctAnswer);

  let answerSpace = Math.floor(Math.random() * 3) + 1;
  console.log(answerSpace);

  let newSpace = answerSpace + 1;
  console.log(newSpace);

  // function insert(arr, index, newItem)
  // { return [...arr.slice(0, index+1), newItem, ...arr.slice(index+1, arr.length)];} 
   // {return[...incorrectOptions.slice(answerSpace,answerSpace++),correctAnswer,...incorrectOptions.slice(answerSpace++,availableOptions.length)]}
      // [...incorrectOptions.slice(0,newSpace),correctAnswer,...incorrectOptions.slice(newSpace,incorrectOptions.length)])

  // [...test.slice(0),"never",...test.slice(test.length)]

//   function newArray()
// {return[...test.slice(),"never",...test.slice(test.length)]}
//

   const optionsArray = [correctAnswer,...incorrectOptions];
   // adding options to choice-text
    const optionA = document.getElementById("a");
    // gets the answer selection
    optionA.innerText = optionsArray[0];
    // sets the answer selection
    const optionB = document.getElementById("b");
    optionB.innerText = optionsArray[1];
    const optionC = document.getElementById("c");
    optionC.innerText = optionsArray[2];
    const optionD = document.getElementById("d");
    optionD.innerText = optionsArray[3];


    const choiceArray = Array.from(document.getElementsByClassName("choice-container"));
    console.log(choiceArray);
    //
    choiceArray.forEach((choice) => {
      choice.addEventListener("click",function(e){
        console.log(e.target.innerText);
        if(e.target.innerText == correctAnswer){
          console.log("sup");
        }
        else{
          console.log("wrong");
        }
      });
    });
    debugger
}

//
//           const newQuesElement = document.createElement('p')
//           // how do I get the realQuestion added to the newQuesElement
//           // if i cannot then that means i have to do something else.
//           //
//           // realQuestion = {" "}
//           // is not equal to each other
//           // newQuesElement = (' ')
//           // question.incorrect_answer = string
//             // choiceArray
//
            // orgIncorrect.split(",")
            // question.incorrect_answer.replace(/]|"|"|/g,"").substring(1).split(',')
//
//            console.log(orgIncorrect)
//            // orgIncorrect[0]
//           const answerChoices = [... orgIncorrect];
//             // debugger
//           // an array of incorrect answers
          // realQuestion.answer = Math.floor(Math.random() * 3) + 1;
//           // return a random integer between 0 & 3 I think
//           answerChoices.splice( -1,0,question.correct_anwser);
//           // we add the correct answer choice to the array of incorrect answers
//
//           newQuesElement.innerText = realQuestion.question;
//           // console.log(newQuesElement)
//           // how do I get one question at a time ?
//           // instead of all of them?
//           // can i apply a wait function/slow
//           // maybe have a function to getQuestions => renderQuestion ; to show individual question => then renderAnswer to show answers corresponding to question ??
//
//           answerChoices.forEach((choice, index) => {
//             realQuestion["choice" + (index +1)] = choice;
//           });
//
//           // return newQuesElement
//           console.log(newQuesElement)
//           quesContainer.appendChild(newQuesElement)
//         })
//       })
//
// })



const quesButton = document.getElementById("show-ques");
const baseUrl = "http://localhost:3000/api/v1/questions";
const choiceArray = Array.from(document.getElementsByClassName("choice-text"));
let availableOptions = [];
let currentQuestion = {};
let questionCounter = 0;


quesButton.addEventListener("click",function(e){
  getQuestions(++questionCounter);
  });

// function hideshow() {
  const hiddenDiv = document.getElementById('hidden-div')
    hiddenDiv.style.display = 'block';
      // hiddenDiv.style.display = 'none'
    // }

// hideshow()


function getQuestions(id){
  fetch(`http://localhost:3000/api/v1/questions/${id}`)
  .then(res => res.json())
  .then(question =>{
    console.log(question);
      // debugger
    let newQuestion = new Question(question);
// creating a new instance of Question : i.e Clss Question
    // document.getElementById('container') +=
     newQuestion.renderCurrentQuestion();
  })
  .catch((error) => {
    // debugger

  console.log( "hello", error)
  reDirect()
});
// // }
// Question.getQuestions();
// // calling the get questions class

function reDirect() { 
  console.log("hello")
  // redirecting to function that would render a form and post to the database via fetch request
  // const gameContainer = document.createElement("<div id= 'game-html'  >
  //             <label for='lname'>Username</label>
  //             <input type='text' name='LastName'id='lname' placeholder='enter you name'><br/><br/>
  //             <input type='submit' value='Save' id='save-button'/>
  //             </div>")

// const questionContainer =  document.getElementById('question-container').style.visibility = "hidden";
// const formDiv = document.getElementById("form-div").style.display = "none"
// const highscoreContainer =  document.getElementById('high-score-container').appendChild(gameContainer);
}
// const myForm = document.getElementById('myForm').style.visibility = 'visible'

// const saveButton = document.getElementById('save-button');
//  So if all the questions have gone through I then want to load the form ?
// How would I load the form after questions have been answered?






//
//
// const configObj = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({question:
//     "correct_anwser": "6",
//      "incorrect_answer": "[\"5\", \"3\", \"4\"]",
//      "question": "How many NBA championship rings does Michael Jordan have?",
//      })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
// }

// fetch request with
// should be added after the end of the game?
// function adds a new question to the database
// newQuestion(){
// fetch(`http://localhost:3000/api/v1/questions/${id}`/post, {
//

// should be added after end of game.
// function deletes question from the database.
// deleteQuestion(){
// // fetch request with delete
// // removing a question
// fetch(`http://localhost:3000/api/v1/questions/${id}`, {
//   method: 'delete', // or 'PUT'
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// // });
// }
// //  I need 2 other AJAX requests
// PUT and Delete!!
}
