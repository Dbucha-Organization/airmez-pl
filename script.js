// Slider
const slides = document.querySelector(".slider-inner");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let current = 0;
let autoSlide;

function changeSlide(index) {
  if (index < 0) index = dots.length - 1;
  if (index >= dots.length) index = 0;

  slides.style.transform = `translateX(-${index * 100}%)`;

  dots[current].classList.remove("active");
  dots[index].classList.add("active");

  current = index;

  resetAuto();
}

function startAuto() {
  autoSlide = setInterval(() => {
    changeSlide(current + 1);
  }, 4000);
}

function resetAuto() {
  clearInterval(autoSlide);
  startAuto();
}

nextBtn.addEventListener("click", () => changeSlide(current + 1));
prevBtn.addEventListener("click", () => changeSlide(current - 1));

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => changeSlide(i));
});

startAuto();
// Hamburger functionality

const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-content");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".hamburger-content a").forEach((link) => {
  link.addEventListener("click", () => {
    ham.classList.remove("active");
    menu.classList.remove("active");
  });
});

// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
  if (localStorage.getItem("ageConfirmed") != "true") {
    ageModal.style.display = "flex";
  } else {
    ageModal.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  localStorage.setItem("ageConfirmed", "true");
  ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
  alert("Dostęp zabroniony. Strona tylko dla osób 18+");
  window.close();
  window.location.href = "https://www.google.pl";
});

//review sldier

const items = document.querySelectorAll(".review-item");
const next = document.querySelector(".next-rev");
const prev = document.querySelector(".prev-rev");

let index = 0;

function showSlide(i) {
  items.forEach((el) => el.classList.remove("active"));
  items[i].classList.add("active");
}

next.addEventListener("click", () => {
  index++;
  if (index >= items.length) index = 0;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index--;
  if (index < 0) index = items.length - 1;
  showSlide(index);
});
// show more
const btn = document.querySelector(".desc button");
const desc = document.querySelector(".desc");

btn.addEventListener("click", () => {
  desc.classList.toggle("open");

  if (desc.classList.contains("open")) {
    btn.textContent = "Pokaż Mniej";
  } else {
    btn.textContent = "Pokaż Więcej";
  }
});
