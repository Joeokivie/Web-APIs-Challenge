document.addEventListener("DOMContentLoaded", function (){
    const startButton = document.getElementById("start-button");
    const timerEl = document.getElementById("timer");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesContainer = document.getElementById("choices");
    const endScreen = document.getElementById("end-screen");
    const finalScore = document.getElementById("final-score");
    const initialsInput = document.getElementById("initials");
    const submitScoreButton = document.getElementById("submit-score");
  
    let currentQuestionIndex = 0;
    let score = 0;
    let timerInterval;
    let timeLeft = 60;
    let shuffledQuestions, currentQuestionsIndex;
    let playerScore = 0; //start my score with 0

    let countdown = function () {
        //here is my countdown function that sets my time
        var timeInterval = setInterval(function () {
          if (time >= 0) {
            timer.textContent = time;
            time--;
          } else {
            timer.textContent = "Game is Over, Try Again";
            clearInterval(timeInterval);
          }
        }, 1000);
      };
  
    const questionList = []
        var question1 = {
           text: "Commonly used data types do NOT include:",
            choices: ["1 - Booleans", "2 - Alerts", "3 - Strings", "4 - Numbers"],
            correctAnswer: "Alerts",
        };
        questionList.push(question1);
    
        var question2 = {
           text: "The condition of an if/else statement is enclosed within ______.",
            choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Parentheses", "4 - Square Brackets"],
            correctAnswer: "Parentheses",
        };
        questionList.push(question2);
    
        var question3 = {
            text: "Arrays in Javascript can be used to store ______.",
            choices: ["1 - Numbers and strings", "2 - Other Arrays", "3 - Booleans", "4 - All of the above",],
            correctAnswer: "All of the above",
        };
        questionList.push(question3);
    
        var question4 = {
            text: "String values must be enclosed within ______ when being assigned to variables.",
            choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Commas", "4 - Parentheses"],
            correctAnswer: "Quotes",
        };
        questionList.push(question4);
    
        var question5 = {
            text: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choices: ["1 - Javascript", "2 - console.log", "3 - Terminal/bash", "4 - For loops"],
            correctAnswer: "console.log",
    
        };

       

        questionList.push(question5);
      // Add more questions
      console.log (questionList)
  
    // START QUIZ FUNCTION
    var startquiz = function(){
        document.getElementById("start-screen").style.display = "none"
        renderQuestions();
        
    }
    function startTimer() {
        timerInterval = setInterval(function () {
          timeLeft--;
          timerEl.textContent = "Time: " + timeLeft;
    
          if (timeLeft <= 0) {
            endGame();
          }
        }, 1000);
      }

    // RENDER QUESTIONS
    function renderQuestions() {
        choicesContainer.innerHTML = '';
        questionContainer.classList.remove('hide');
        console.log(questionList[currentQuestionIndex].text)
        questionText.textContent = questionList[currentQuestionIndex].text;

        // Iterate over choices array, create element for each
        for (i = 0; i < questionList[currentQuestionIndex].choices.length; i++) {
            var choiceBtn = document.createElement('button');
            choiceBtn.style.display = 'block';
            choiceBtn.classList.add('choice-btn')
            choiceBtn.textContent = questionList[currentQuestionIndex].choices[i]
            choicesContainer.append(choiceBtn);
        }

    }

     function handlequestionclick (e) {
        if (!e.target.matches('.choice-btn')) {
            return;
        }

        var chosenAnswer = e.target.textContent.split(' ')[2];
        console.log(chosenAnswer);

        if (chosenAnswer === questionList[currentQuestionIndex].correctAnswer) {
            console.log('U RIGHT')
        } else {
            console.log('WRONG')
        }

        if (currentQuestionIndex >= questionList.length -1) {
            console.log('quiz end')
            return;
        }

        currentQuestionIndex++
        renderQuestions();
        
     }
    

     



    choicesContainer.addEventListener ("click", handlequestionclick)
    startButton.addEventListener ("click",startquiz)
    currentQuestionsIndex++; //increments to next question
    score.textContent = playerScore;
    setNextQuestion(); //also sets the next question
  });

    

