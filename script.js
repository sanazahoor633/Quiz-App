const quizData = [
    {
        question: 'What is the age of Aifa?',
        a: '20',
        b: '23',
        c: '28',
        d: '30',
        correct: 'a'
    },
    {
        question: 'What is the most used programming language in 2025?',
        a: 'JavaScript',
        b: 'Python',
        c: 'Java',
        d: 'C++',
        correct: 'a'
    },
    {
        question: 'What is the current condition of Pakistan nowadays?',
        a: 'Stable',
        b: 'Developing',
        c: 'Facing challenges',
        d: 'Improving',
        correct: 'c'
    },
    {
        question: 'Which of the following is a frontend technology?',
        a: 'React',
        b: 'Node.js',
        c: 'MongoDB',
        d: 'Django',
        correct: 'a'
    },
    {
        question: 'Which company developed JavaScript?',
        a: 'Microsoft',
        b: 'Apple',
        c: 'Netscape',
        d: 'Google',
        correct: 'c'
    },
    {
        question: 'What is the capital of France?',
        a: 'Madrid',
        b: 'Berlin',
        c: 'Paris',
        d: 'Rome',
        correct: 'c'
    },
    {
        question: 'Which programming language is primarily used for web development?',
        a: 'Python',
        b: 'JavaScript',
        c: 'C++',
        d: 'Swift',
        correct: 'b'
    }
   
];

let currentQuiz = 0;
let score = 0;


const quiz = document.querySelector("#quiz");
const questionEl = document.querySelector("#question");
const aText = document.querySelector("#a-text");
const bText = document.querySelector("#b-text");
const cText = document.querySelector("#c-text");
const dText = document.querySelector("#d-text");
const submitEl = document.querySelector("#submit");
const answerEls = document.querySelectorAll(".answer")




function loadQuiz(){
    deselectedAnswer()
let data = quizData[currentQuiz];

questionEl.textContent = data.question;
aText.textContent = data.a;
bText.textContent = data.b;
cText.textContent = data.c;
dText.textContent = data.d;

}


function getSelected(){
let answer = undefined;

answerEls.forEach(function(answerEl){
    if(answerEl.checked){
answer = answerEl.id
    }
})
return answer;


}

function deselectedAnswer(){
    answerEls.forEach(function(answerEl){
        answerEl.checked = false
    })
};

submitEl.addEventListener("click", function(){
const answer = getSelected();
if(answer){
    if(quizData[currentQuiz] && answer === quizData[currentQuiz].correct){
score++;
    } 

    currentQuiz++;

    if(currentQuiz < quizData.length){
loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered correctly  ${score}/${quizData.length}</h2>
        <button onclick="location.reload(); ">Reload</button>`
    }
}
 
});




loadQuiz();


