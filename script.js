function resetParameter() {
    answeredCorrectly = 0;
    selectedQuestionDB = 'HTML';
    shuffleAllQuestions();
}

function shuffleAllQuestions() {
    shuffle(htmlQuestions);
    shuffle(cssQuestions);
    shuffle(jsQuestions);
}

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

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function answerClicked(questionId, answerId) {
    if (!canGetAnswer) {
        return;
    }
    let correctAnswerId = getSelectedQuestionDB()[questionId]['answerId'];
    canGetAnswer = false;
    if (correctAnswerId == answerId) {
        answeredCorrectly++;
        document.getElementById('answer-btn-' + answerId).classList.add('answer-btn-success');
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById('answer-btn-' + answerId).classList.add('answer-btn-fail');
        document.getElementById('answer-btn-' + correctAnswerId).classList.add('answer-btn-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('footer-btn').disabled = false;
    refreshProgressBar(questionId + 1);
}

function createMainSceen() {
    let template = getMainSceen();
    template += getStartSceneFooterTemplate();
    document.getElementById('main-container').innerHTML = template;
    resetParameter();
}

function createEndSceen() {
    let template = getFinishFrame();
    template += getResultFooterTemplate();
    document.getElementById('main-container').innerHTML = template;
}

function createQuestionSceen(index) {
    canGetAnswer = true;
    shuffleAnswers(getSelectedQuestionDB()[index]);
    let template = getQuestionFrameTemplate(index);
    template += getQuestionFooterTemplate(index + 1);
    document.getElementById('main-container').innerHTML = template;
}

function refreshProgressBar(questNumber) {
    let progressbar = document.getElementById('progress-bar');
    let percentDone = questNumber / 10 * 100;
    progressbar.style = `width: ${percentDone}%`;
    progressbar.innerHTML = `${questNumber} / 10`;
}

function setGenre(genreId) {
    for (let i = 0; i < questionCategorys.length; i++) {
        document.getElementById('nav-btn-' + i).classList.remove('nav-button-activ');
    }
    document.getElementById('nav-btn-' + genreId).classList.add('nav-button-activ');
    selectedQuestionDB = questionCategorys[genreId];
}