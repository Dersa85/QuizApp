function resetParameter() {
    answeredCorrectly = 0;
}

function answerClicked(questionId, answerId) {
    if (!canGetAnswer) {
        return;
    }
    let correctAnswerId = getSelectedQuestionDB()[questionId]['answerId'];
    canGetAnswer = false;
    if (correctAnswerId == answerId) {
        answeredCorrectly++
        document.getElementById('answer-btn-' + answerId).classList.add('answer-btn-success');
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById('answer-btn-' + answerId).classList.add('answer-btn-fail');
        document.getElementById('answer-btn-' + correctAnswerId).classList.add('answer-btn-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('footer-btn').disabled = false;
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
    let template = getQuestionFrameTemplate(index);
    template += getQuestionFooterTemplate(index + 1);
    document.getElementById('main-container').innerHTML = template;
}
