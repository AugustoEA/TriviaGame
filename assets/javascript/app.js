//Array with all the trivia questions.

var quizQuestions = [
    {
        question: 'What is the largest US State?',
        choices: ['Texas','California', 'Puerto Rico', 'Alaska'],
        correctAnswer:'Alaska'
    },

    {
        question: 'What is the largest country by area in the world?',
        choices: ['US', 'Canada', 'Russia', 'China'],
        correctAnswer:'Russia'
    },

    {
        question: 'What is the best selling videogame of all time?',
        choices: ['GTA V', 'Minecraft', 'Tetris', 'Super Mario Bros'],
        correctAnswer:'Minecraft'
    },

    {
        question: 'Which country won the 2018 World Cup?',
        choices: ['Brazil', 'Germany', 'France', 'Netherlands'],
        correctAnswer:'France'
    },

    {
        question: 'What is the biggest event that happens in Austin every year?',
        choices: ['UT vs. LSU', 'USGP F1', 'ACL', 'SXSW'],
        correctAnswer:'SXSW'
    },

    {
        question: "What racing series won't come to Austin in 2019",
        choices: ['MOTOGP', 'F1', 'Indycar', 'WEC'],
        correctAnswer:'WEC'
    }]
    // console.log(quizQuestions);

    //Initial Values
    var counter = 30;
    var currentQuestion = 0 ;
    var score = 0;
    var lost = 0;
    var timer;

    //Timer
    
    function timeUp() {
        clearInterval(timer);
    }
    
    function countDown() {
        counter--;

        $('#time').html('Timer: ' + counter);

        if (counter === 0) {
            timeUp();
        }
    }

    //Display questions and options
    function loadQuestions() {
        counter = 30;
        timer = setInterval(countDown, 1000)
        var question = quizQuestions[currentQuestion].question;
        var choices = quizQuestions[currentQuestion].choices;

        $('#time').html('Time Left: ' + counter);
        $('#game').html(`
        <h4>${question}</h4>
        ${loadChoices(choices)  }
    `);
    }

    function loadChoices(choices) {
        var result = '';
        for (var i = 0; i < choices.length; i++) {
            result += `<p class='choice' data-answer='${choices[i]}'>${choices[i]}</p>`;
        }

        return result;
    }

    loadQuestions();