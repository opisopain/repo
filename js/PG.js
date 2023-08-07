
const PGCards = document.querySelectorAll('.PG');
const submitBtns = document.querySelectorAll('.submitBtn');
const showAnswerBtns = document.querySelectorAll('.showAnswerBtn');
const feedbackEls = document.querySelectorAll('.feedback');
const answerCards = document.querySelectorAll('.answer-card');
const closeExplanationBtns = document.querySelectorAll('.closeExplanationBtn');


const questions = [
  {
    question: "Apa bahasa inggrisnya lampu?",
    options: ["A. Lamp", "B. Book", "C. Floor", "D. Fire"],
    correctAnswer: "A",
  },
  {
    question: "Apa bahasa inggrisnya buku?",
    options: ["A. Lamp", "B. Book", "C. Floor", "D. Fire"],
    correctAnswer: "B",
  }
];

PGCards.forEach((PG, index) => {
  const submitBtn = PG.querySelector('.submitBtn');
  const showAnswerBtn = PG.querySelector('.showAnswerBtn');
  const closeExplanationBtn = PG.querySelector('.closeExplanationBtn');

  submitBtn.addEventListener('click', () => checkAnswer(index));
  showAnswerBtn.addEventListener('click', () => showAnswer(index));
  closeExplanationBtn.addEventListener('click', () => closeExplanation(index));
});

function checkAnswer(index) {
  const selectedOption = document.querySelector(`input[name="answer${index + 1}"]:checked`);

  if (selectedOption) {
    const selectedAnswer = selectedOption.value;
    if (selectedAnswer === questions[index].correctAnswer) {
      feedbackEls[index].innerHTML = '<p>Jawaban kamu benar </p>';
      showAnswerBtns[index].style.display = 'inline-block';
    } else {
      feedbackEls[index].innerHTML = '<p>Jawaban kamu salah 😢</p>';
      showAnswerBtns[index].style.display = 'inline-block';
    }
  } else {
    feedbackEls[index].innerHTML = '<p>Silakan pilih jawaban.</p>';
  }
}


function showAnswer(index) {
  PGCards[index].classList.add('flipped');
}


function closeExplanation(index) {
  PGCards[index].classList.remove('flipped');
}

