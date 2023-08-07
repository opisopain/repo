const vocabulary = [
  { question: "Apple", answer: "Apel" },
  { question: "Cat", answer: "Kucing" },
  { question: "Book", answer: "Buku" },
  { question: "Dog", answer: "Anjing" },
  { question: "Car", answer: "Mobil" },
  { question: "Tree", answer: "Pohon" },
  { question: "Sun", answer: "Matahari" },
  { question: "Moon", answer: "Bulan" },
  { question: "Rain", answer: "Hujan" },
  { question: "Sea", answer: "Laut" },
  { question: "Fish", answer: "Ikan" },
  { question: "Bird", answer: "Burung" },
  { question: "Table", answer: "Meja" },
  { question: "Chair", answer: "Kursi" },
  { question: "Shirt", answer: "Kemeja" },
  { question: "Shoe", answer: "Sepatu" },
  { question: "Phone", answer: "Telepon" },
  { question: "Computer", answer: "Komputer" },
  { question: "Pencil", answer: "Pensil" },
  { question: "Paper", answer: "Kertas" },
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10; // Total pertanyaan yang akan ditampilkan
let timeLeft = 60; // Waktu dalam detik (1 menit)
let timerInterval; // Untuk menyimpan interval timer

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  const startContainer = document.getElementById("start-container");
  startContainer.style.display = "none"; // Sembunyikan kontainer mulai kuis

  const questionContainer = document.getElementById("question-container");
  questionContainer.style.display = "block"; // Tampilkan kontainer pertanyaan

  shuffledQuestions = [...vocabulary];
  shuffleArray(shuffledQuestions);

  currentQuestionIndex = 0; // Reset index pertanyaan ke awal
  score = 0; // Reset skor ke awal

  showQuestion();
  startTimer();
  updateScore();
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.textContent = `Translate the word: 
    ${shuffledQuestions[currentQuestionIndex].question}`;

  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

  const answerInput = document.getElementById("answer");
  answerInput.disabled = false;
  answerInput.value = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = shuffledQuestions[currentQuestionIndex].answer.toLowerCase();

  const resultElement = document.getElementById("result");

  if (userAnswer === correctAnswer) {
    resultElement.textContent = "Jawaban Anda benar!";
    score += 10;
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      showQuestion();
      resetTimer();
      startTimer();
    } else {
      endQuiz();
    }
  } else {
    resultElement.textContent = "Jawaban Anda salah. Jawaban yang benar: " + shuffledQuestions[currentQuestionIndex].answer;
    score -= 5;
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      // Menampilkan pesan selama 3 detik sebelum menampilkan soal berikutnya
      setTimeout(() => {
        showQuestion();
        resetTimer();
        startTimer();
      }, 3000);
    } else {
      // Jika sudah menjawab 10 pertanyaan, selesaikan kuis
      endQuiz();
    }
  }

  // Perbarui skor setelah pengguna menjawab soal
  updateScore();
}

function endQuiz() {
  const scoreElement = document.getElementById("final-score");
  scoreElement.textContent = score;

  const scoreContainer = document.getElementById("score-container");
  scoreContainer.style.display = "block"; // Tampilkan kontainer skor

  const questionContainer = document.getElementById("question-container");
  questionContainer.style.display = "none"; // Sembunyikan kontainer pertanyaan

  // Hentikan interval timer
  clearInterval(timerInterval);
  timerInterval = null;
}

function startTimer() {
  if (timerInterval) {
    // Jika interval sudah berjalan, hentikan terlebih dahulu
    clearInterval(timerInterval);
  }

  const timerElement = document.getElementById("timer");
  timerElement.textContent = "Time left: " + formatTime(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      // Waktu habis, lanjut ke pertanyaan berikutnya
      clearInterval(timerInterval);
      timerInterval = null;
      checkAnswer();
    } else {
      timerElement.textContent = "Time left: " + formatTime(timeLeft);
    }
  }, 1000);
}

function resetTimer() {
  timeLeft = 60;
}

function formatTime(seconds) {
  const remainingSeconds = seconds % 60;
  return "0:" + String(remainingSeconds).padStart(2, "0");
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = "Score: " + score;
}

function restartQuiz() {
  const scoreContainer = document.getElementById("score-container");
  scoreContainer.style.display = "none"; // Sembunyikan kontainer skor

  const startContainer = document.getElementById("start-container");
  startContainer.style.display = "block"; // Tampilkan kontainer mulai kuis

  const questionContainer = document.getElementById("question-container");
  questionContainer.style.display = "none"; // Sembunyikan kontainer pertanyaan
}

// Panggil fungsi initializeQuiz setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  const startContainer = document.getElementById("start-container");
  const questionContainer = document.getElementById("question-container");
  const scoreContainer = document.getElementById("score-container");

  // Sembunyikan kontainer pertanyaan dan skor saat memuat halaman
  questionContainer.style.display = "none";
  scoreContainer.style.display = "none";
});

// menuToggle
const menuToggle = document.querySelector(".menuToggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// ini navbar aktif akan berwarna
let list = document.querySelectorAll(".navbar-nav li");
function active() {
  list.forEach((i) => i.classList.remove("active"));

  this.classList.add("active");
}

list.forEach((i) => i.addEventListener("click", active));
