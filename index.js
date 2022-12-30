var readlineSync = require('readline-sync');
score = 0;
var highScorer = {
  name: "Saurav R",
  highScore: 3,
}
var userName = readlineSync.question("Please type your name:");
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer) {
    score++;
    console.log("Your answer is correct");
    console.log("Your current score is:" + score);
  }
  else {
    console.log("Sorry your answer is wrong");
    console.log("Your current score is:" + score);
  }
}
var questionAnswers = [
  {
    question: "Who is my superhero?",
    answer: "batman",
  },
  {
    question: "Which is my favorite city in india?",
    answer: "banglore",
  },
  {
    question: "Where do I live presently?",
    answer: "pune",
  },
  {
    question: "What is my name?",
    answer: "saurav r",
  },
  {
    question: "Am I patriotic (True/False)?",
    answer: "true",
  },
]
for (i = 0; i < questionAnswers.length; i++) {
  play(questionAnswers[i].question, questionAnswers[i].answer);
}
console.log(userName + " your final score is : " + score + " and the highest score is " + highScorer.highScore + " and the Scorer is " + highScorer.name);