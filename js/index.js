// animasi mengetik
let typingText = new Typed("#text", {
  strings: ["Sopian", "Physics", "Teacher", "Frontend", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});

// ubah gelap terng
let mode = document.querySelector(".terang");
let switchMode = document.querySelector(".switch-mode");
let gantiElement = document.querySelector(".ganti");

function toggleMode() {
  mode.classList.toggle("terang");
  mode.classList.toggle("gelap");

  if (mode.classList.contains("gelap")) {
    gantiElement.textContent = gantiElement.textContent.replace("Gelap", "Terang");
  } else {
    gantiElement.textContent = gantiElement.textContent.replace("Terang", "Gelap");
  }
}

switchMode.addEventListener("click", toggleMode);

// ini menuToggle
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
