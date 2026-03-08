const questions = [
    {
        question: "Qual é a coisa que eu mais admiro em você?",
        options: ["Sua inteligência", "Seu sorriso", "Sua determinação", "Tudo isso e muito mais"],
        answer: 3
    },
    {
        question: "Quem é a mulher mais linda desse mundo todinho?",
        options: ["Uma modelo famosa", "A vizinha", "Você, obviamente", "Não sei"],
        answer: 2
    },
    {
        question: "Como você me faz sentir todos os dias?",
        options: ["O homem mais sortudo", "Normal", "Cansado", "Feliz"],
        answer: 0
    }
];

let currentQuestion = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const quizContainer = document.getElementById('quiz-container');
const finalMessage = document.getElementById('final-message');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].answer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showFinal();
        }
    } else {
        alert("Tente de novo, eu sei que você sabe a resposta certa! ❤️");
    }
}

function showFinal() {
    quizContainer.classList.add('hidden');
    finalMessage.classList.remove('hidden');
    startHeartRain();
}

function startHeartRain() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.opacity = Math.random();
        document.body.appendChild(heart);

        setTimeout(() => { heart.remove(); }, 5000);
    }, 300);
}

loadQuestion();