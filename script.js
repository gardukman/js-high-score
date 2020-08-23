const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Started");
    startButton.classList.add("hide");
    // shuffles the questions with the Math.random subtracting .5 from the number to give us a number greater than .5 or less than .5 each time
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
};


function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
};


function selectAnswer(e) {

}

const questions = [
    {
        question: "What does 'var' mean in JavaScript?",
        answers: [
            { text: "variable", correct: true },
            { text: "varnish", correct: false },
            { text: "Validation And Coding", correct: false },
            { text: "Varment", correct: false }
        ]
    }
]