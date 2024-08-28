const questions = [
    {
        question: "Which of the following is the brain of the computer?",
        answers: [
            {text:"A) Monitor", correct: false},
            {text:"B) Keyboard", correct: false},
            {text:"C) Central Processing Unit (CPU)", correct: true},
            {text:"D) Mouse", correct: false},
        ]
    },
    {
        question: "What does RAM stand for?",
        answers: [
            {text:"A) Random Access Memory", correct: true},
            {text:"B) Read Access Memory", correct: false},
            {text:"C) Read And Modify", correct: false},
            {text:"D) Random Application Memory", correct: false},
        ]
    },
    {
        question: "Which of the following is not an input device?",
        answers: [
            {text:"A) Scanner", correct: false},
            {text:"B) Monitor", correct: true},
            {text:"C) Keyboard", correct: false},
            {text:"D) Mouse", correct: false},
        ]
    },
    {
        question: "What is the full form of URL?",
        answers: [
            {text:"A) Uniform Resource Locator", correct: true},
            {text:"B) Uniform Resource Link", correct: false},
            {text:"C) Uniform Resource Loader", correct: false},
            {text:"D) Uniform Resource Language", correct: false},
        ]
    },
    {
        question: "What type of software is an operating system?",
        answers: [
            {text:"A) Application software", correct: false},
            {text:"B) System software", correct: true},
            {text:"C) Utility software", correct: false},
            {text:"D) Malware", correct: false},
        ]
    },
    {
        question: "पानी का रासायनिक सूत्र क्या है?",
        answers: [
            {text:"A) H2O", correct: true},
            {text:"B) CO2", correct: false},
            {text:"C) O2", correct: false},
            {text:"D) NaCl", correct: false},
        ]
    },
    {
        question: "दूध को दही में बदलने के लिए कौन सा जीवाणु जिम्मेदार होता है?",
        answers: [
            {text:"A) साल्मोनेला", correct: false},
            {text:"B) लैक्टोबैसिलस", correct: true},
            {text:"C) ई. कोलाई", correct: false},
            {text:"D) स्टैफिलोकोकस", correct: false},
        ]
    },
    {
        question: "पौधे का कौन सा भाग प्रकाश संश्लेषण के लिए जिम्मेदार होता है?",
        answers: [
            {text:"A) जड़", correct: false},
            {text:"B) तना", correct: false},
            {text:"C) पत्ता", correct: true},
            {text:"D) फूल", correct: false},
        ]
    },
    {
        question: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?",
        answers: [
            {text:"A) ऑक्सीजन", correct: false},
            {text:"B) कार्बन डाइऑक्साइड", correct: false},
            {text:"C) नाइट्रोजन", correct: true},
            {text:"D) हाइड्रोजन", correct: false},
        ]
    },
    {
        question: "बल्ब का आविष्कार किसने किया?",
        answers: [
            {text:"A) निकोला टेस्ला", correct: false},
            {text:"B) थॉमस एडिसन", correct: true},
            {text:"C) ग्राहम बेल", correct: false},
            {text:"D) अल्बर्ट आइंस्टीन", correct: false},
        ]
    },
    {
        question: "भारत के पहले राष्ट्रपति कौन थे?",
        answers: [
            {text:"A) जवाहरलाल नेहरू", correct: false},
            {text:"B) राजेंद्र प्रसाद", correct: true},
            {text:"C) सरदार पटेल", correct: false},
            {text:"D) महात्मा गांधी", correct: false},
        ]
    },
    {
        question: "ऑस्ट्रेलिया की राजधानी क्या है?",
        answers: [
            {text:"A) सिडनी", correct: false},
            {text:"B) मेलबर्न", correct: false},
            {text:"C) कैनबरा", correct: true},
            {text:"D) पर्थ", correct: false},
        ]
    },
    {
        question: "दुनिया का सबसे छोटा महाद्वीप कौन सा है?",
        answers: [
            {text:"A) अफ्रीका", correct: false},
            {text:"B) ऑस्ट्रेलिया", correct: true},
            {text:"C) यूरोप", correct: false},
            {text:"D) अंटार्कटिका", correct: false},
        ]
    },
    {
        question: "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        answers: [
            {text:"A) पृथ्वी", correct: false},
            {text:"B) शुक्र", correct: false},
            {text:"C) बृहस्पति", correct: true},
            {text:"D) मंगल", correct: false},
        ]
    },
    {
        question: "भारत के राष्ट्रगान 'जन गण मन' के रचयिता कौन हैं?",
        answers: [
            {text:"A) रवींद्रनाथ टैगोर", correct: true},
            {text:"B) बंकिम चंद्र चट्टोपाध्याय", correct: false},
            {text:"C) सरोजिनी नायडू", correct: false},
            {text:"D) सुभाष चंद्र बोस", correct: false},
        ]
    },
    {
        question: "What is the value of 15×4?",
        answers: [
            {text:"A) 45", correct: false},
            {text:"B) 50", correct: false},
            {text:"C) 60", correct: true},
            {text:"D) 75", correct: false},
        ]
    },
    {
        question: "What is the square root of 81?",
        answers: [
            {text:"A) 7", correct: false},
            {text:"B) 8", correct: false},
            {text:"C) 9", correct: true},
            {text:"D) 10", correct: false},
        ]
    },
    {
        question: "Solve: 25+35−10=?",
        answers: [
            {text:"A) 45", correct: false},
            {text:"B) 50", correct: true},
            {text:"C) 55", correct: false},
            {text:"D) 60", correct: false},
        ]
    },
    {
        question: "What is the perimeter of a rectangle with length 8 cm and width 5 cm?",
        answers: [
            {text:"A) 13 cm", correct: false},
            {text:"B) 26 cm", correct: true},
            {text:"C) 40 cm", correct: false},
            {text:"D) 48 cm", correct: false},
        ]
    },
    {
        question: "If a triangle has angles 50°, 60°, and x°, what is the value of x?",
        answers: [
            {text:"A) 70°", correct: true},
            {text:"B) 80°", correct: false},
            {text:"C) 90°", correct: false},
            {text:"D) 100°", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10; // Set time per question in seconds

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    ShowQuestion();
}

function ShowQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton (){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        ShowQuestion();
    }else{
        showScore();
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerHTML = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextButton.style.display = "block"; // Show the next button
            autoSubmit(); // Automatically submit the answer when time is up
        }
    }, 1000);
}

function autoSubmit() {
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener('click', () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();