

    let questionIndex = 0;
    let intervalId;
    let correctAns;
    let time = 15;
    let rightAnsTotal = 0;
    let wrongAnsTotal = 0;

    //Questions and Answers array
    let QandA = [
        {
            question: "How many legs does a lobster have?",
            answers: ["0", "8", "12", "10"]
        },
        {
            question: "How many arms do most starfish have?",
            answers: ["5", "0", "2", "6"]
        },
        {
            question: "Which is the largest mammal in the world?",
            answers: ["Colossal Squid", "Blue Whale", "African Elephant", "Giraffe"]
        },
        {
            question: "Which is the largest living bird?",
            answers: ["Southern Cassowary", "Ostrich", "Emu", "Emperor Penguin"]
        },
        {
            question: "What animal has the longest lifespan?",
            answers: ["Elephant", "Blue Whale", "Giant tortoise", "Locust"]
        },
        {
            question: "What is the only mammal capable of true flight?",
            answers: ["Flying squirrel", "Ocelot", "Hummingbird", "Bat"]
        },
        {
            question: "What animal has the highest blood pressure?",
            answers: ["Giraffe", "Flea", "Blue Whale", "Elephant"]
        },
        {
            question: "What is the fastest flying bird in the world?",
            answers: ["Harpy Eagle", "Peregrine Falcon", "Horned Sungem", "Spine-tailed Swift"]
        }
    ];

    // END of data portion 

    // Start Triva Game
$('#startButton').on("click", startGame);
    // Random question
    QandA = QandA.sort(() => 0.5 - Math.random());
//check answer
$('.ans').on('click', check);

//FUNCTIONS

function startGame() {
	$("#startDiv").hide();
	$("#bodyRows").show(5000);
	displayQuestions();
};

function displayQuestions() {
	timer();
	//display randomized question
	$('#Question').html(QandA[questionIndex].question);
	//correct answer
	correctAns = QandA[questionIndex].answers[3];
	//display randomized answers 
	let randomAnswers = QandA[questionIndex].answers.sort(() => 0.5 - Math.random());
	randomAnswers.forEach((answer, i) => {
		$('#ans' + (i + 1)).html(answer);
	});
};

function nextQuestion() {
	questionIndex++;
	if (questionIndex >= QandA.length) {
		clearInterval(intervalId);
		$('#bodyRows').hide();
		score();
	}
	else {
		displayQuestions();
	};
};

function score() {
	$('#scoreBoard').show(1000);
	$('#rightAns').html(rightAnsTotal);
	$('#wrongAns').html(wrongAnsTotal);
};

function timer() {
	time = 15;
	clearInterval(intervalId);
	intervalId = setInterval(decrement, 1000);
};

function decrement() {
	time--;
	$("#timer").html(time);
	if (time === 0) {
		wrongAnsTotal++;
		clearInterval(intervalId);
		nextQuestion();
	};
};

function check() {
	const userAns = event.target.innerHTML;
	console.log(QandA[questionIndex].question)
	console.log("User Answer: ", userAns);
	console.log("Correct Answer: ", QandA[questionIndex].answers[3]);
	if (userAns === correctAns) {
		rightAnsTotal++
	} else {
		wrongAnsTotal++;
	};
	nextQuestion();
}




