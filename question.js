class Question{
  // initiates instances of question
  constructor(id, correct_anwser,incorrect_answer,question ) 9


renderQuestion() => this.question

// calls a class function
static getQuestions(id){
  fetch(`http://localhost:3000/api/v1/questions/${id}`)
  .then(res => res.json())
  .then(question =>{
    console.log(question);
    renderCurrentQuestion(question);
  })
  .catch((error) => {

  console.log( "hello", error)
  reDirect()
});
}

















}
