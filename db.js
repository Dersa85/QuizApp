let questionCategorys = ['HTML', 'CSS', 'JS', 'Java'];
let selectedQuestionDB = 'HTML';
let answeredCorrectly = 0;
let canGetAnswer = true;

const AUDIO_SUCCESS = new Audio('audio/success.wav');
const AUDIO_FAIL = new Audio('audio/fail.wav');

function getSelectedQuestionDB() {
    if (selectedQuestionDB == 'HTML') {
        return htmlQuestions;
    }
}

const htmlQuestions = [
    {
        'question' : 'Was bewirkt das HTML-Element &lt;b&gt;&lt;/b&gt;',
        'answerId' : 2,
        'answers' : [
            'Die HTML Seite wird breiter',
            'Dient nur als Platzhalter',
            'Damit wird der Inhalt Fett geschrieben',
            'Damit werden Bilder besser dagestellt'
        ]
    },
    {
        'question' : 'Was bewirkt der HTML-Tag &lt;br&gt;',
        'answerId' : 3,
        'answers' : [
            'Die Seite wird nur bis zu dem Tag angezeigt',
            'Das runter scrollen wir danach verhindert',
            'Wird zum berechnen von zahlen genutzt',
            'Erzwingt ein Zeilenumbruch'
        ]
    },
    {
        'question' : 'Was bewirkt der HTML-Tag &lt;!DOCTYPE html&gt;',
        'answerId' : 2,
        'answers' : [
            'Verhindert das lesen des Documents für alle Programme ausser ein Browser',
            'Ist nur ein Hinweis für das Entwickler-Team',
            'Sagt den Browser um was für ein Document es sich handelt',
            'Gibt bei Bugs an mit welchen Programm es repariert werden kann'
        ]
    },
    {
        'question' : 'Wofür wird &lt;head&gt;&lt;/head&gt; gebraucht',
        'answerId' : 0,
        'answers' : [
            'Allgemeine Einstellungen werden hier definiert',
            'Das ist der Teil der ganz oben auf der Seite Sichtbar ist',
            'Da kommen die Adresse der Seite rein',
            'Da steht wer die Seite öffnen darf'
        ]
    },
    {
        'question' : 'Welche Schreibweise ist richtig',
        'answerId' : 0,
        'answers' : [
            '&lt;p&gt;Hallo Welt&lt;/p&gt;',
            '&lt;p Hallo Welt&gt;&lt;/p&gt;',
            '&lt;p&gt;&lt;/p Hallo Welt&gt;',
            '&lt;p&gt;Hallo Welt;'
        ]
    },
    {
        'question' : 'Wie groß darf eine HTML Seite maximal sein',
        'answerId' : 3,
        'answers' : [
            '1024 Zeilen',
            '10000 Zeilen',
            '1024 Mb',
            'Keine feste größe'
        ]
    },
    {
        'question' : 'Welche Schreibweise ist richtig um ein einfachen Link zu erstellen',
        'answerId' : 2,
        'answers' : [
            '&lt;a href="nextPage.html"&gt;&lt;/a&gt;',
            '&lt;a&gt;nextPage&lt;/a&gt;',
            '&lt;a href="nextPage.html"&gt;nextPage&lt;/a&gt;',
            '&lt;a href="nextPage.html"&gt;'
        ]
    },
    {
        'question' : 'Wer hat HTML erfunden',
        'answerId' : 0,
        'answers' : [
            'Tim Berners-Lee',
            'Thomas Edison',
            'Abbé Jean Picard',
            'Gene Roddenberry'
        ]
    },
    {
        'question' : 'Was bedeutet es wenn eine Webseite "responsiv" ist',
        'answerId' : 3,
        'answers' : [
            'Beschreibt eine hübsche Webseite',
            'Bedeutet das die Fertig Entwickelt wurde',
            'Jetzt kann man sie richtig Anschauen',
            'Heist die Seite passt sich der Anzeigegröße an'
        ]
    },
    {
        'question' : 'Wann wurde HTML Erstveröffentlicht',
        'answerId' : 2,
        'answers' : [
            '1990',
            '1991',
            '1992',
            '1993'
        ]
    }
]