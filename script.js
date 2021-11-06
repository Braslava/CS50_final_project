const easyQuestions = [{
        question: "Which statement best describes an ultramarathon?",
        answers: {
            a: "Any distance longer than 42 kilometres",
            b: "Any running event in mountainus terrain",
            c: "A running event o at least 100 kilometres",
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
        question: "Which statement best describes an ultramarathon?",
        answers: {
            a: "Any distance longer than 42km",
            b: "Any running event in mountainus terrain",
            c: "A running event o at least 100km",
            d: "Something only crazy people like to do"
        },
        correctAnswer: 'a'
    },
]



function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {

        let output = [];
        let answers;

        questions.forEach((question, i) => {
            answers = [];
            for (let answer in questions[i].answers) {
                answers.push(
                    '<label class=answer_label>' +
                    '<input type="radio" class="answer" name="question' + i + '" value="' + answer + '">' +
                    answer + ': ' +
                    questions[i].answers[answer] +
                    '</label>'
                );
            }
            output.push(
                '<div class="quiz__question">' + questions[i].question + '</div>' +
                '<div class="quiz__answers">' + answers.join('') + '</div>'
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        const answerContainers = quizContainer.querySelectorAll('.quiz__answers');
        let userAnswer = '';
        let numCorrect = 0;

        questions.forEach((question, i) => {
            
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].classList.add('correct');
                answerContainers[i].classList.remove('wrong');
            } else {
                answerContainers[i].classList.add('wrong');
            }
        })
        resultsContainer.innerHTML = numCorrect + ' correct answers out of ' + questions.length + '. Reload the page to try again.';
    }

    showQuestions(questions, quizContainer);

    submitButton.addEventListener("click", () => {
        showResults(questions, quizContainer, resultsContainer);
    })

}

export { generateQuiz };


const quizContainer = document.querySelector('.js-quiz-item');
const resultsContainer = document.querySelector('.js-results');
const submitButton = document.querySelector('.js-submit-btn');

generateQuiz(easyQuestions, quizContainer, resultsContainer, submitButton);