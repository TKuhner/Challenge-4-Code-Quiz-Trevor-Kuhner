# Challenge-4-Code-Quiz-Trevor-Kuhner
This repository is for the completion of the challenge 4 - code quiz for the Northwestern University Coding Bootcamp.

# Deployed Page
https://tkuhner.github.io/Challenge-4-Code-Quiz-Trevor-Kuhner/

![image](https://github.com/TKuhner/Challenge-4-Code-Quiz-Trevor-Kuhner/assets/71107536/39a49664-7b17-42e1-98e6-de728a93b0df)



Quiz Program

This is a simple quiz program implemented in JavaScript. It presents a series of multiple-choice questions to the user, calculates their score based on the number of correct answers, and allows them to store and view high scores.
Features

    Multiple-choice quiz with a set of predefined questions and answers.
    Timer to track the time taken to complete the quiz.
    Scoring system to calculate the number of correct answers.
    Storage of high scores in the browser's local storage.
    Display of high scores in descending order.
    Ability to clear stored high scores.

Usage

To use the quiz program, follow these steps:

    Load deployed web page, clone the repository, or download the source code files.

    Open the index.html file in a web browser.

    The quiz will start after clicking the start button.

    Read each question and select the correct answer by clicking on the corresponding option.

    If the selected answer is incorrect, 10 seconds will be deducted from the timer.

    After answering all the questions or when the timer reaches 0, the program will display the user's final score.

    The user will be prompted to enter their initials to save their score.

    The program will store the user's score, initials, and remaining time in the browser's local storage.

    To view the high scores, click on the "View High Scores" button.

    The high scores will be displayed in descending order, showing the initials, score, and time for each entry.

    To clear the high scores, click on the "Clear High Scores" button.

    To restart the quiz or go back to the introduction, click on the corresponding buttons.


GIVEN I am taking a code quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and score

Grading Requirements


If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

    A repository that has no code

    A repository that includes a unique name but nothing else

    A repository that includes only a README file but nothing else

    A repository that only includes starter code

This Challenge is graded based on the following criteria:
Technical Acceptance Criteria: 40%

    Satisfies all of the above acceptance criteria.

Deployment: 32%

    Application deployed at live URL.

    Application loads with no errors.

    Application GitHub URL submitted.

    GitHub repository that contains application code.

Application Quality: 15%

    Application user experience is intuitive and easy to navigate.

    Application user interface style is clean and polished.

    Application resembles the mock-up functionality provided in the Challenge instructions.

Repository Quality: 13%

    Repository has a unique name.

    Repository follows best practices for file structure and naming conventions.

    Repository follows best practices for class/id naming conventions, indentation, high-quality comments, etc.

    Repository contains multiple descriptive commit messages.

    Repository contains a high-quality README file with description, screenshot, and link to deployed application.
