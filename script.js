// debugger;

// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What is an Array in JS?",
        imgSrc : "img/html.png",
        choiceA : "An object used to store multiple values in a single variable",
        choiceB : "An object used to store data",
        choiceC : "An object used to declare a function ",
        correct : "A"
    },{
        question : "How many values can a Boolean have?",
        imgSrc : "img/css.png",
        choiceA : "1",
        choiceB : "2",
        choiceC : "2",
        correct : "B"
    },{
        question : "What does a Function Statement do?",
        imgSrc : "img/js.png",
        choiceA : "Declares a statement",
        choiceB : "Declares a variable",
        choiceC : "Declares a function",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
       
        count++
    }else{
        count = 0;
        
        
    }
}

// checkAnwer

function checkAnswer(answer){
    
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}



// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    
}
