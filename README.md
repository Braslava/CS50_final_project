# CS50_final_project The great ultrarunning quiz
This is final project for HarvardX CS50 Intro to Computer Science. 
The video presentation of this project is available at [https://youtu.be/0XdQ9k8LJ-k]. 
 
## Structure and languages  
The project is a website that consists of a home page (index.html) and two pages (easy.html and hard.html) that each feature a quiz with multiple choice questions. It contains HTML, CSS and JavaScript. 

## Styles 
Only CSS is used for styling. The layout is done using CSS grid and mostly contained in the styles.css file. Element classes that can be reused throughout the website are styled in the global.css file while quiz element classes are in quiz_elements.css. Header and footer formatting is separated in header_footer.css. I tried to stick to BEM when naming the classes. The file reset.css resets all the default styles. 

## Script 
File main.js contains generateQuiz function which creates the quiz and checks user's answers for correctness. Inside the generateQuiz function showQuestions function loops through the questions array and creates question and answer html elements. 

Function showResults provides that upon clicking the ** submit button ** answers of correctly answered questions turn green but if the answer is wrong they turn red. Also, it displays text that tells whether the answer is correct of wrong, or nothing has been selected. Overall results are displayed at the bottom. showResults also hides the submit button and displays a button "Try again" which reloads the page. 

The generateQuiz function is exported at the end of the main.js file, so I could use it in separate scripts for both quizzes. The script_easy.js file contains an array with all the easy questions for the first quiz and calls the generateQuiz function. Script_hard.js does the same for the hard.html page. 