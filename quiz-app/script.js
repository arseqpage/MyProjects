const quizData = [
    {
        question: 'How old is my dog?',
        a: '1',
        b: '4',
        c: '5',
        d: '7',
        correct: 'c'
    }, {
        question: 'What is the best programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'What is he President of Russia',
        a: 'Vladimir Putin',
        b: 'Donald Tramp',
        c: 'Ilya Vasiliev',
        d: 'Kirill Orleshko',
        correct: 'a'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '2014',
        d: 'none of the above',
        correct: 'b'
    }
]


const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');


const questionEl = document.getElementById('question');
console.log(questionEl);

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.textContent = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }

    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {

        answerEl.checked = false;

    });
}

submitBtn.addEventListener('click', () => {

    //check to see answer

    const answer = getSelected();

    console.log(answer);



    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score} / ${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }


})