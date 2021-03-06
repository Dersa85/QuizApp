
/**
 * Reset parameter for a new game
 */
function resetParameter() {
    answeredCorrectly = 0;
    selectedQuestionDB = 'HTML';
    shuffleAllQuestions();
}

/**
 * Shuffle all questions
 */
function shuffleAllQuestions() {
    shuffle(htmlQuestions);
    shuffle(cssQuestions);
    shuffle(jsQuestions);
}

/**
 * Shuffle the answer from the question
 * 
 * @param {object} question - This is the question which want shuffled her answers
 */
function shuffleAnswers(question) {
    let answerCopy = [...question['answers']];
    shuffle(answerCopy);
    for (let i = 0; i < answerCopy.length; i++) {
        let correctAnswer = question['answers'][question['answerId']];
        if (answerCopy[i] == correctAnswer) {
            question['answerId'] = i;
            question['answers'] = answerCopy;
            break;
        }
    }
}

/**
 * Function for shuffle array
 * 
 * @param {array} array - The array which you want shuffle
 */
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

/**
 * Controls the selected answer and show if it is correct and when not then the right answer.
 * Set class for visual feedback
 * 
 * @param {number} questionId - This is the index from question array
 * @param {number} answerId - This is the selected answer-index of the question
 * @returns - null
 */
function answerClicked(questionId, answerId) {
    if (!canGetAnswer) {
        return;
    }
    let correctAnswerId = getSelectedQuestionDB()[questionId]['answerId'];
    canGetAnswer = false;
    if (correctAnswerId == answerId) {
        answeredCorrectly++;
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById('answer-btn-' + answerId).classList.add('answer-btn-fail');
        AUDIO_FAIL.play();
    }
    document.getElementById('answer-btn-' + correctAnswerId).classList.add('answer-btn-success');
    document.getElementById('footer-btn').disabled = false;
    refreshProgressBar(questionId + 1);
}

/**
 * Build the start screen
 */
function createMainSceen() {
    let template = getMainSceen();
    template += getStartSceneFooterTemplate();
    document.getElementById('main-container').innerHTML = template;
    resetParameter();
}

/**
 * Build the end screen
 */
function createEndSceen() {
    let template = getFinishFrame();
    template += getResultFooterTemplate();
    document.getElementById('main-container').innerHTML = template;
}

/**
 * Build the question screen
 * 
 * @param {number} index - This is the index of the question array
 */
function createQuestionSceen(index) {
    canGetAnswer = true;
    shuffleAnswers(getSelectedQuestionDB()[index]);
    let template = getQuestionFrameTemplate(index);
    template += getQuestionFooterTemplate(index + 1);
    document.getElementById('main-container').innerHTML = template;
}

/**
 * Refresh the progress bar
 * 
 * @param {number} questNumber - This is the number from completed questions
 */
function refreshProgressBar(questNumber) {
    let progressbar = document.getElementById('progress-bar');
    let percentDone = questNumber / 10 * 100;
    progressbar.style = `width: ${percentDone}%`;
    progressbar.innerHTML = `${questNumber} / 10`;
}

/**
 * Visualize the selected question genre
 * 
 * @param {number} genreId - This is the index from array "questionCategorys"
 */
function setGenre(genreId) {
    for (let i = 0; i < questionCategorys.length; i++) {
        document.getElementById('nav-btn-' + i).classList.remove('nav-button-activ');
    }
    document.getElementById('nav-btn-' + genreId).classList.add('nav-button-activ');
    selectedQuestionDB = questionCategorys[genreId];
}