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

           // if ( !(answerContainers[i].querySelector('input[name=question' + i + ']:checked'))) {
                // let alert = document.createElement('span');
                // answerContainers[i].appendChild(alert); 
                // alert.innerHTML = "You did not select an answer!"
           // }  
            
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