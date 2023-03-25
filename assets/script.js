var timeEl = document.querySelector("#time-left");
var highScore =localStorage.getItem("#highscore");
var secondsLeft = 100;
var startQuiz = document.querySelector("#start-quiz");
var titleEl = document.querySelector(".title");
var answerEl = document.querySelector(".descro");
var questionsRight = document.querySelector("#questionsRight");
var answerBtn = document.querySelector(".btn")

function sendMessage() {
    timeLeft.textContent = 'You Lost!';
}

startQuiz.addEventListener("click", function(){
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " : Time Left";
    
        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            sendMessage();
        }
    }, 1000);

    titleEl.textContent = "What is JavaScript?"
    answerEl.textContent = ""
})

var questionHistory = {
    questionsRight: questions.value,
    timeHistory: time.value
};

function youWon() {
    if (secondsLeft > 0) {
        localStorage.setItem("questionHistory", secondsLeft)
    }
}