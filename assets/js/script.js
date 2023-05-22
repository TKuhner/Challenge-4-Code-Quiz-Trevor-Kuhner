// QUIZ QUESTIONS, ANSWERS, AND CORRECT ANSWERS
const quizData = [
    {
        question: "Which data structure uses LIFO?",
        a: "Array",
        b: "Int",
        c: "Stacks",
        d: "Queues",
        correct: "Stacks",
    },
    {
        question: "What is FIFO?",

        a:     "First in Few Out",
        b:     "Few In Few Out",
        c:     "First In First Out",
        d:     "Few In First Out",
        correct: "First In First Out", 
    },
    {
        question: "Which is NOT a datatype?",
        a: "boolean",
        b: "string",
        c: "double",
        d: "letter",
        correct: "letter", 
    }, 
    {
        question: "What year did JavaScript Launch?",
        a: "1995",
        b: "2000",
        c: "1999",
        d: "2005",
        correct: "1995",
    }
]


var timerEl = document.querySelector("#timer")
var startButton = document.querySelector("#start")

var secondsCount = 100;
var currentQuest = 0

const questionEl = document.querySelector("#question")
// Answer buttons
const ans1 = document.querySelector("#answer1");
const ans2 = document.querySelector("#answer2");
const ans3 = document.querySelector("#answer3");
const ans4 = document.querySelector("#answer4");
const answerButton = document.querySelector("#answers")


// EVENT LISTENERS
startButton.addEventListener("click", startQuiz);

answerButton.addEventListener("click", checkAnswer);


function startQuiz(){
    // display intro off
    // display quiz on
    startTimer()
    setQuiz(currentQuest);
}

function setQuiz() {

    var currentQuestion = quizData[currentQuest]

    questionEl.textContent = currentQuestion.question
    ans1.textContent = currentQuestion.a
    ans2.textContent = currentQuestion.b
    ans3.textContent = currentQuestion.c
    ans4.textContent = currentQuestion.d
}

function checkAnswer(event){
    // alert("made it to checkAnswer")
    event.preventDefault();

    if(event.target.matches(".answer")){
        console.log(event.target.textContent)
        if (quizData[currentQuest].correct !== event.target.textContent){
            secondsCount -= 10;
            if (currentQuest < quizData.length){
                currentQuest++;
                console.log(currentQuest)
            }
        } else if (currentQuest < quizData.length){
            currentQuest++;
            console.log(currentQuest)
        }
        setQuiz(currentQuest);
    }
    }

    

// Timer function
function startTimer(){
    var timeInt = setInterval(function() {
        secondsCount--;
        timerEl.textContent = 'Time: ' + secondsCount + 's';

        if (secondsCount === 0){
            clearInterval(timeInt);

        }
    }, 1000);
}