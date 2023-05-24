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
        a: "First in Few Out",
        b: "Few In Few Out",
        c: "First In First Out",
        d: "Few In First Out",
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

// DOM elements
var introEl = document.querySelector('#intro');
var quizEl = document.querySelector('#quiz');
var resultsEl = document.querySelector('#results');
var scoresEl = document.querySelector('#scores');
var scoresListEl = document.querySelector('#scoresList');
var initialsInputEl = document.querySelector('#initialsInput')

// Buttons and timer
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var submitButton = document.querySelector(".submitButton");
var scoresButtons = document.querySelectorAll(".scoresButton");
var clearScoresButton = document.querySelector("#clearScoresButton");
var returnIntroButton = document.querySelector(".returnIntroButton");
var returnIntroScoresButton = document.querySelector("#returnIntro");

// Counters and variables
var answersCorrect = 0;
var secondsCount = 60;
var currentQuest = 0;
var scoreList = [];
var userInitials = "";
var userScore = 0;

// Question and answer elements
const questionEl = document.querySelector("#question");
const ans1 = document.querySelector("#answer1");
const ans2 = document.querySelector("#answer2");
const ans3 = document.querySelector("#answer3");
const ans4 = document.querySelector("#answer4");
const answerButton = document.querySelector("#answers");

// EVENT LISTENERS
startButton.addEventListener("click", startQuiz);
answerButton.addEventListener("click", checkAnswer);
submitButton.addEventListener("click", submitData);
scoresEl.addEventListener("click", displayScores);
scoresButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        displayScores(event.target);
    });
});
clearScoresButton.addEventListener("click", clearScores);
returnIntroScoresButton.addEventListener("click", returnIntro);
returnIntroButton.addEventListener("click", returnIntro);


function returnIntro() {
    // Hide other sections
    quizEl.style.display = "none";
    resultsEl.style.display = "none";
    scoresEl.style.display = "none";

    // Display intro section
    introEl.style.display = "block";
}


function startQuiz() {
    // Reset variables
    answersCorrect = 0;
    secondsCount = 60;
    currentQuest = 0;

    // Hide intro section
    introEl.style.display = "none";

    // Display quiz section
    quizEl.style.display = "block";

    // Start the timer
    startTimer();

    // Set the quiz
    setQuiz();
}

function setQuiz() {
    if (currentQuest < quizData.length) {
        var currentQuestion = quizData[currentQuest];
        questionEl.textContent = currentQuestion.question;
        ans1.textContent = currentQuestion.a;
        ans2.textContent = currentQuestion.b;
        ans3.textContent = currentQuestion.c;
        ans4.textContent = currentQuestion.d;
    }
}

function checkAnswer(event) {
    event.preventDefault();

    // Check if the selected answer is correct
    if (quizData[currentQuest].correct !== event.target.textContent) {
        secondsCount -= 10;

        // Move to the next question or show scores
        if (currentQuest < quizData.length) {
            currentQuest++;
            if (currentQuest < quizData.length) {
                setQuiz(currentQuest);
            } else {
                getScores();
            }
        } else {
            getScores();
        }
    } else if (currentQuest < quizData.length) {
        currentQuest++;
        answersCorrect++;

        // Move to the next question or show scores
        if (currentQuest < quizData.length) {
            setQuiz(currentQuest);
        } else {
            getScores();
        }
    }
}

function getScores() {
    clearInterval(timeInt);

    // Hide quiz section
    quizEl.style.display = "none";

    // Display results section
    resultsEl.style.display = "block";

    document.getElementById("scoreReveal").innerText = "Your final score is " + answersCorrect + "/" + currentQuest + " with a remaining time of " + secondsCount + "s";
}

function submitData() {
    userInitials = initialsInputEl.value;
    userScore = currentQuest !== 0 ? ((answersCorrect / currentQuest) * 100).toFixed(2) : 0;

    // Load existing scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scoreList")) || [];

    // Append the new score to the existing list
    storedScores.push({ initials: userInitials, score: userScore, time: secondsCount });

    // Sort the scores in descending order
    storedScores.sort(function (a, b) {
        return b.score - a.score;
    });

    // Update the score list in the UI
    scoresListEl.innerHTML = "";
    storedScores.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.textContent = item.initials + " - Score: " + item.score + " - Time: " + item.time + "s";
        scoresListEl.appendChild(listItem);
    });

    // Store the updated scores in localStorage
    localStorage.setItem("scoreList", JSON.stringify(storedScores));

    displayScores(); // Call the displayScores function to show the updated scores
}

function displayScores() {
    // Hide other sections
    introEl.style.display = "none";
    quizEl.style.display = "none";
    resultsEl.style.display = "none";

    // Display scores section
    scoresEl.style.display = "block";

    // Retrieve stored scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scoreList"));

    // Clear existing list items
    scoresListEl.innerHTML = "";

    // If there are stored scores, display them
    if (storedScores) {
        // Sort scores in descending order
        storedScores.sort(function (a, b) {
            return b.score - a.score;
        });

        // Iterate over the scores and create list items
        storedScores.forEach(function (score) {
            var listItem = document.createElement("li");
            listItem.textContent = score.initials + " - Score: " + score.score + " - Time: " + score.time + "s";
            scoresListEl.appendChild(listItem);
        });
    }

    var returnIntroButton = document.querySelector(".returnIntroButton");
    returnIntroButton.addEventListener("click", returnIntro);
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
    return;
}

function clearScores() {
    localStorage.clear();
    scoresListEl.innerHTML = "";
    storeScores();
}

// Timer function
function startTimer() {
    timeInt = setInterval(function () {
        secondsCount--;
        timerEl.textContent = 'Time: ' + secondsCount + 's';

        if (secondsCount === 0) {
            clearInterval(timeInt);
            displayScores();
        }
    }, 1000);
}
