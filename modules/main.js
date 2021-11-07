function generateQuiz(questions, quizContainer, resultsContainer, submitButton, reloadButton) {

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

    function addAlert(elementWhereToAdd, text) {
        let alert = document.createElement('span');
        elementWhereToAdd.appendChild(alert);
        alert.innerHTML = text;
        alert.classList.add('alert')
        return;
    }

    function showResults(questions, quizContainer, resultsContainer) {
        const answerContainers = quizContainer.querySelectorAll('.quiz__answers');
        let userAnswer = '';
        let numCorrect = 0;


        questions.forEach((question, i) => {

            if (!(answerContainers[i].querySelector('input[name=question' + i + ']:checked'))) {
                addAlert(answerContainers[i], "You did not select an answer!");
            } else {
                userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

                if (userAnswer === questions[i].correctAnswer) {
                    numCorrect++;
                    answerContainers[i].classList.add('correct');
                    answerContainers[i].classList.remove('wrong');
                    addAlert(answerContainers[i], "Correct! :)");
                } else if (userAnswer !== questions[i].correctAnswer) {
                    answerContainers[i].classList.add('wrong');
                    addAlert(answerContainers[i], "Incorrect! :(");
                }
            }
        })
        resultsContainer.innerHTML = numCorrect + ' correct answers out of ' + questions.length + '. Reload the page to try again.';
        submitButton.classList.add('hidden');
        reloadButton.classList.remove('hidden');
    }

    showQuestions(questions, quizContainer);

    submitButton.addEventListener("click", () => {
        showResults(questions, quizContainer, resultsContainer);
    })

    reloadButton.addEventListener("click", () => {
        window.location.reload();
        document.documentElement.scrollTop = 0;
        return false;
    })
}

export {
    generateQuiz
};