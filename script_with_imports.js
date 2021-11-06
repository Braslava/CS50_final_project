//import { quizContainer } from "./script.js";
//import { resultsContainer } from "./script.js";
//import { submitButton } from "./script.js";


const hardQuestions = [{
        question: "Which are considered the conventional ultramarahton distances?",
        answers: {
            a: "56 kilometers, 42 miles, 120 kilometers",
            b: "100 kilometers and 200 kilometers",
            c: "84 kilometers and 168 kilometers",
            d: "50 kilometers, 50 miles, 100 kilometers, 100 miles"
        },
        correctAnswer: 'd'
    },
    {
        question: "The UTMB (Ultra-Trail du Mont-Blanc) route goes through three countries. Which countries are those?",
        answers: {
            a: "Austria, Switzerland and France",
            b: "Lichtenstein, Germany and Austria",
            c: "France, Italy and Switzerland",
            d: "Italy, France and Lichtenstein"
        },
        correctAnswer: 'c'
    },
    {
        question: "Spartathlon is considered one one of the most difficlut running race in the world. What are the current best results for men and women?",
        answers: {
            a: "men's 22:30:56 and women's 25:24:25",
            b: "men's 20:25:00 and women's 24:48:18",
            c: "men's 23:26:03 and women's 28:22:26",
            d: "men's 21:46:23 and women's 23:25:27"
        },
        correctAnswer: 'b'
    },
    {
        question: "In 2021 Courtney Dauwalter was the fastest woman in the UTMB race. Which place did she obtain overall?",
        answers: {
            a: "13th",
            b: "2nd",
            c: "7th",
            d: "17th"
        },
        correctAnswer: 'c'
    },
]

import { generateQuiz } from "./script.js";

const quizContainer = document.querySelector('.js-quiz-item');
const resultsContainer = document.querySelector('.js-results');
const submitButton = document.querySelector('.js-submit-btn');

generateQuiz(hardQuestions, quizContainer, resultsContainer, submitButton);