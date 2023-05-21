const quizData = [
    {
        question: "Which data structure uses LIFO?",
        a: "Array",
        b: "Int",
        c: "Stacks",
        d: "Queues",
        correct: "c",
    },
    {
        question: "What is FIFO?",

        a:     "First in Few Out",
        b:     "Few In Few Out",
        c:     "First In First Out",
        d:     "Few In First Out",
        correct: "c", 
    },
    {
        question: "Which is NOT a datatype?",
        a: "boolean",
        b: "string",
        c: "double",
        d: "letter",
        correct: "d", 
    }, 
    {
        question: "What year did JavaScript Launch?",
        a: "1995",
        b: "2000",
        c: "1999",
        d: "2005",
        correct: "a",
    }
]


var timerEl = document.querySelector("#timer")
var startButton = document.querySelector()

var seconds = 100;
var currentQuest = 0

const questionEl = document.querySelector("#question")
// Answer buttons
const ans1 = document.querySelector("#answer1");
const ans2 = document.querySelector("#answer2");
const ans3 = document.querySelector("#answer3");
const ans4 = document.querySelector("#answer4");

function startTimer(){
    var timeInt = setInterval(function() {
        seconds--;
        timerEl.textContent = 'Time:${seconds}';

        if (seconds === 0){
            clearInterval(timeInt);

        }
    }, 1000);
}

function makeQuiz() {

    const currentQuestion = quizData[currentQuest]

    questionEl.textContent = currentQuestion.question
    ans1.textContent = currentQuestion.a
    ans2.textContent = currentQuestion.b
    ans3.textContent = currentQuestion.c
    ans4.textContent = currentQuestion.d

}