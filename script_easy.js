const easyQuestions = [{
        question: "Which statement best describes an ultramarathon?",
        answers: {
            a: "Any distance longer than 42 kilometres",
            b: "Any running event in mountainus terrain",
            c: "A running event of at least 100 kilometres",
            d: "Something only crazy people like to do"
        },
        correctAnswer: 'a'
    },
    {
        question: "Which of these is the most popular trail ultrarunning event in Europe?",
        answers: {
            a: "Western States Endurance Run",
            b: "Transgrancanaria",
            c: "Ultra Trail du Mont Blanc (UTMB)",
            d: "Ecotrail Paris"
        },
        correctAnswer: 'c'
    },
    {
        question: "Spartathlon is considered one one of the most difficlut running race in the world. How long is the distance of Spartathlon?",
        answers: {
            a: "150 kilometres",
            b: "500 kilometres",
            c: "246 kilometres",
            d: "206 kilometres"
        },
        correctAnswer: 'c'
    },
    {
        question: "According to a study by Paul Ronto and Vania Nikolova (2021), what is the average age of an ultrarunner?",
        answers: {
            a: "35 years",
            b: "28 years",
            c: "42 years",
            d: "48 years"
        },
        correctAnswer: 'c'
    },
]

import { generateQuiz } from "./modules/main.js";

const quizContainer = document.querySelector('.js-quiz-item');
const resultsContainer = document.querySelector('.js-results');
const submitButton = document.querySelector('.js-submit-btn');

generateQuiz(easyQuestions, quizContainer, resultsContainer, submitButton);