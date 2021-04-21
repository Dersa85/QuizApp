// contentFrame
function getMainSceen() {
    return `
    <div class="content flex">
            <div id="nav-container">
                <img src="img/logo.png" id="nav-logo">
                <div>
                    <button type="button" id="nav-btn-0" class="nav-button nav-button-activ">HTML</button>
                    <button type="button" id="nav-btn-1" class="nav-button">CSS</button>
                    <button type="button" id="nav-btn-2" class="nav-button">JS</button>
                    <button type="button" id="nav-btn-3" class="nav-button">Java</button>
                    <p>asd</p>
                </div>
            </div>
            <div class="full-size">
                <div class="flex-all-center-column sub-content">
                    <h2>QuizApp</h2>
                    <p style="margin-bottom: 0;" class="ft-align-center">Willkommen und ich wünsche dir viel Spass beim Quiz</p>
                    <p class="ft-align-center">Suche dir Links die Rubrik aus und dann drück unten auf Start</p>
                </div>
            </div>
        </div>
    `;
}

function getFinishFrame() {
    return `
        <div class="content flex-all-center-column">
            <img class="img-result" src="img/brainResult.png">
            <h2>HTML QUIZ FERTIG</h2>
            <p><b>DU HAST ${answeredCorrectly}/10 RICHTIG BEANTWORTET</b></p>
        </div>
    `;
}

function getQuestionFrameTemplate(questionIndex) {
    let template = ' <div class="quiz-field ">'
    template += `<h2>${getQuestion(questionIndex)}</h2>`;
    template += getAnswersTemplate(questionIndex);
    template += '</div>'
    return template;
}

// Question
function getQuestion(index) {
    return getSelectedQuestionDB()[index]['question'];
}

// Answer Template
function getAnswersTemplate(questionIndex) {
    let question = getSelectedQuestionDB()[questionIndex];
    let template = '';
    for (let i = 0; i < question['answers'].length; i++) {
        let answer = question['answers'][i];
        template += `
        <div id="answer-btn-${i}" class="card button" onclick="answerClicked(${questionIndex}, ${i})">
            <div class="card-body">
                ${answer}
            </div>
        </div>
        `;
    }
    return template;
}

// Footer Template
function getStartSceneFooterTemplate() {
    return `
    <div id="footer">
        <button type="button" class="btn btn-primary" onclick="createQuestionSceen(0)">Start</button>
    </div>
    `;
}

function getResultFooterTemplate() {
    return `
        <div id="footer">
            <button type="button" class="btn btn-primary" onclick="createMainSceen()">Neues Spiel</button>
        </div>
    `;
}

function getQuestionFooterTemplate(nextId) {
    let maxQuestions = getSelectedQuestionDB().length;
    if (nextId >= maxQuestions) {
        return `
            <div id="footer">
                <button type="button" class="btn btn-primary" onclick="createEndSceen()">Auswertung</button>
            </div>
        `;
    } else {
        return `
            <div id="footer">
                <button type="button" class="btn btn-primary" onclick="createQuestionSceen(${nextId})">Nächste</button>
            </div>
        `;
    }
}