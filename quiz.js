const questions=[
    {
        question:"which one is the largest animal?",
        answer:[
           {text: "shark",correct: false},
           {text: "whale",correct: true},
           {text: "elephant",correct: false},
           {text: "lion",correct: false},

        ]
    },
    {
        question:"which one is the smallest mammal?",
        answer:[
           {text: "shark",correct: false},
           {text: "whale",correct: false},
           {text: "bat",correct: true},
           {text: "rat",correct: false},

        ]
    },
    {
        question:"which one is the smallest continent in the world?",
        answer:[
           {text: "africa", correct: false},
           {text: "america", correct: false},
           {text: "europe", correct: false},
           {text: "Australia", correct: true},

        ]
    },
    {
        question:"which one is the smallest continent in the world?",
        answer:[
           {text: "africa", correct: false},
           {text: "america", correct: false},
           {text: "europe", correct: false},
           {text: "Australia", correct: true},

        ]
    },
];
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo +"." + currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const ansButton = document.createElement("button");
        ansButton.innerHTML = answer.text;
        ansButton.classList.add('btn');
        answerButtons.appendChild(ansButton);
        if(answer.correct){
            ansButton.dataset.correct=answer.correct;
        }
        ansButton.addEventListener('click',selectAnswer);

    });
}
   
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    }
function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct==='true';
    if(isCorrect){
        selectedButton.classList.add('correct');
        }
    else{
        selectedButton.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add('correct');
        }
        button.disabled=true;
    });
}
startQuiz();