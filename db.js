let questionCategorys = ['HTML', 'CSS', 'JS', 'Java'];
let selectedQuestionDB = 'HTML';
let answeredCorrectly = 0;
let canGetAnswer = true;

const AUDIO_SUCCESS = new Audio('audio/success.wav');
const AUDIO_FAIL = new Audio('audio/fail.wav');

function getSelectedQuestionDB() {
    if (selectedQuestionDB == 'HTML') {
        return htmlQuestions;
    } if (selectedQuestionDB == 'CSS') {
        return cssQuestions;
    } else {
        
    }
}

const htmlQuestions = [
    {
        'question': 'Was bewirkt das HTML-Element &lt;b&gt;&lt;/b&gt;',
        'answerId': 2,
        'answers': [
            'Die HTML Seite wird breiter',
            'Dient nur als Platzhalter',
            'Damit wird der Inhalt Fett geschrieben',
            'Damit werden Bilder besser dagestellt'
        ]
    },
    {
        'question': 'Was bewirkt der HTML-Tag &lt;br&gt;',
        'answerId': 3,
        'answers': [
            'Die Seite wird nur bis zu dem Tag angezeigt',
            'Das runter scrollen wir danach verhindert',
            'Wird zum berechnen von zahlen genutzt',
            'Erzwingt ein Zeilenumbruch'
        ]
    },
    {
        'question': 'Was bewirkt der HTML-Tag &lt;!DOCTYPE html&gt;',
        'answerId': 2,
        'answers': [
            'Verhindert das lesen des Documents für alle Programme ausser ein Browser',
            'Ist nur ein Hinweis für das Entwickler-Team',
            'Sagt den Browser um was für ein Document es sich handelt',
            'Gibt bei Bugs an mit welchen Programm es repariert werden kann'
        ]
    },
    {
        'question': 'Wofür wird &lt;head&gt;&lt;/head&gt; gebraucht',
        'answerId': 0,
        'answers': [
            'Allgemeine Einstellungen werden hier definiert',
            'Das ist der Teil der ganz oben auf der Seite Sichtbar ist',
            'Da kommen die Adresse der Seite rein',
            'Da steht wer die Seite öffnen darf'
        ]
    },
    {
        'question': 'Welche Schreibweise ist richtig',
        'answerId': 0,
        'answers': [
            '&lt;p&gt;Hallo Welt&lt;/p&gt;',
            '&lt;p Hallo Welt&gt;&lt;/p&gt;',
            '&lt;p&gt;&lt;/p Hallo Welt&gt;',
            '&lt;p&gt;Hallo Welt;'
        ]
    },
    {
        'question': 'Wie groß darf eine HTML Seite maximal sein',
        'answerId': 3,
        'answers': [
            '1024 Zeilen',
            '10000 Zeilen',
            '1024 Mb',
            'Keine feste größe'
        ]
    },
    {
        'question': 'Welche Schreibweise ist richtig um ein einfachen Link zu erstellen',
        'answerId': 2,
        'answers': [
            '&lt;a href="nextPage.html"&gt;&lt;/a&gt;',
            '&lt;a&gt;nextPage&lt;/a&gt;',
            '&lt;a href="nextPage.html"&gt;nextPage&lt;/a&gt;',
            '&lt;a href="nextPage.html"&gt;'
        ]
    },
    {
        'question': 'Wer hat HTML erfunden',
        'answerId': 0,
        'answers': [
            'Tim Berners-Lee',
            'Thomas Edison',
            'Abbé Jean Picard',
            'Gene Roddenberry'
        ]
    },
    {
        'question': 'Was bedeutet es wenn eine Webseite "responsiv" ist',
        'answerId': 3,
        'answers': [
            'Beschreibt eine hübsche Webseite',
            'Bedeutet das die Fertig Entwickelt wurde',
            'Jetzt kann man sie richtig Anschauen',
            'Heist die Seite passt sich der Anzeigegröße an'
        ]
    },
    {
        'question': 'Wann wurde HTML Erstveröffentlicht',
        'answerId': 2,
        'answers': [
            '1990',
            '1991',
            '1992',
            '1993'
        ]
    }
];

const cssQuestions = [
    {
        'question': 'Welche Aussage ist richtig',
        'answerId': 2,
        'answers': [
            'Mit CSS wird programmiert',
            'CSS ist eine Datanbank',
            'Mit CSS werden Internetseiten formatiert',
            'Gute Internetseiten bestehen nur aus CSS'
        ]
    },
    {
        'question': 'Was ist ein Selector in CSS',
        'answerId': 3,
        'answers': [
            'So werden Eigenschaften bezeichnet',
            'Wählt die zu bearbeitende HTML Datei aus',
            'Dort wird der Pfad zu der CSS angegeben',
            'Gibt an welches Element in HTML geändert wird'
        ]
    },
    {
        'question': 'Was wird in der Praxis meist genutzt',
        'answerId': 3,
        'answers': [
            'Profesional CSS',
            'Inline CSS',
            'Internal CSS',
            'External CSS'
        ]
    },
    {
        'question': 'Was macht die Eigenschaft "color"',
        'answerId': 3,
        'answers': [
            'Ändert die Hintergrund Farbe vom Browser',
            'Ändert die Hintergrund Farbe vom Element',
            'Färbt das gesammte Element komplett ein',
            'Ändert die Schriftfarbe'
        ]
    },
    {
        'question': 'Was macht die Eigenschaft "background-color"',
        'answerId': 1,
        'answers': [
            'Ändert die Hintergrund Farbe vom Browser',
            'Ändert die Hintergrund Farbe vom Element',
            'Färbt das gesammte Element komplett ein',
            'Ändert die Schriftfarbe'
        ]
    },
    {
        'question': 'Was macht "padding"',
        'answerId': 0,
        'answers': [
            'Erhöht die grösse des Elements',
            'Gibt einen zusätzlichen Rahmen',
            'Ändert den abstand zu anderen Elementen',
            'Das ist die position des Elements'
        ]
    },
    {
        'question': 'Was macht "border"',
        'answerId': 1,
        'answers': [
            'Erhöht die grösse des Elements',
            'Gibt einen zusätzlichen Rahmen',
            'Ändert den abstand zu anderen Elementen',
            'Das ist die position des Elements'
        ]
    },
    {
        'question': 'Was macht "margin"',
        'answerId': 2,
        'answers': [
            'Erhöht die grösse des Elements',
            'Gibt einen zusätzlichen Rahmen',
            'Ändert den abstand zu anderen Elementen',
            'Das ist die position des Elements'
        ]
    },
    {
        'question': 'Was ist der Vorteil von "display: flex;"',
        'answerId': 2,
        'answers': [
            'Das bewegen von Elementen ist flexibler',
            'Die Auflösung der Internetseite ist gleich des Betriebssystems',
            'Damit ist es einfacher eine Seite responsiv zu machen',
            'Die Browserunterstützung ist flexibler'
        ]
    },
    {
        'question': 'Wer hat CSS erfunden',
        'answerId': 0,
        'answers': [
            'Håkon Wium Lie',
            'Tim Berners-Lee',
            'Jean-Luc Picard',
            'Leonard Nimoy'
        ]
    }
];