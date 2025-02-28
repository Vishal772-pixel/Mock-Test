const questions = {
    anatomy: [
        { question: "What is the largest bone in the human body?", options: ["Femur", "Tibia", "Humerus", "Fibula"], answer: "Femur" },
        { question: "How many ribs are in the human body?", options: ["12", "24", "26", "28"], answer: "24" }
    ],
    physiology: [
        { question: "What is the main function of red blood cells?", options: ["Oxygen transport", "Immune response", "Clotting", "Hormone transport"], answer: "Oxygen transport" },
        { question: "What organ regulates blood sugar levels?", options: ["Pancreas", "Liver", "Kidneys", "Lungs"], answer: "Pancreas" }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = '';
let timer;
let timeElapsed = 0;

document.getElementById('startTest').onclick = () => {
    selectedCategory = document.getElementById('category').value;
    startTimer();
    loadQuestion();
    document.getElementById('test-info').style.display = 'none';
    document.getElementById('questionSection').style.display = 'block';
};

document.getElementById('nextQuestion').onclick = () => {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[selectedCategory].length) {
        loadQuestion();
    } else {
        endTest();
    }
};

function loadQuestion() {
    const questionData = questions[selectedCategory][currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const options = document.getElementById('options');
    options.innerHTML = '';
    questionData.options.forEach(option => {
        const li = document.createElement('li');
        li.innerText = option;
        li.onclick = () => selectOption(li);
        options.appendChild(li);
    });
}

function selectOption(selected) {
    document.querySelectorAll('#options li').forEach(li => li.classList.remove('selected'));
    selected.classList.add('selected');
}

function checkAnswer() {
    const selected = document.querySelector('#options .selected');
    if (selected && selected.innerText === questions[selectedCategory][currentQuestionIndex].answer) {
        score++;
    }
}

function endTest() {
    clearInterval(timer);
    document.getElementById('questionSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('score').innerText = score;
}

function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        const minutes = String(Math.floor(timeElapsed / 60)).padStart(2, '0');
        const seconds = String(timeElapsed % 60).padStart(2, '0');
        document.getElementById('time').innerText = `${minutes}:${seconds}`;
    }, 1000);
}

document.getElementById('retryTest').onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    timeElapsed = 0;
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('test-info').style.display = 'block';
};
