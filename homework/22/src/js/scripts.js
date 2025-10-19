// Пишемо свій слайдер зображень, який повинен:
// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами
// Змінювати кожні 3 секунди зображення (масив з 5+ зображень)

import '../scss/styles.scss';
import { images } from './data.js';

let sliderItem = document.querySelector('.slider-item');
let currentSlide = 0;
let sliderImg = document.createElement('img');
sliderImg.src = images[currentSlide];
sliderItem.appendChild(sliderImg);

const nextSlideBtn = document.getElementById('imageNext');
const prevSlideBtn = document.getElementById('imagePrev');
const sliderDots = document.querySelector('.slider-nav-dots');

function setSliderActiveDot() {
  document.querySelectorAll('.slider-dot').forEach((dotItem, index) => {
    dotItem.classList.toggle('is-active', index === currentSlide);
  });
}

function generateSliderDots() {
  images.forEach((image, index) => {
    const dot = document.createElement('li');
    dot.classList.add('slider-dot');
    if (index === currentSlide) dot.classList.add('is-active');

    dot.addEventListener('click', () => {
      currentSlide = index;
      sliderImg.src = images[currentSlide];
      setSliderActiveDot();
      autoSlideChange();
    });

    sliderDots.appendChild(dot);
  });
}

generateSliderDots();

function changeSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  sliderImg.src = images[currentSlide];
  setSliderActiveDot();
}

let autoTimer = 0;
function autoSlideChange() {
  clearInterval(autoTimer);
  autoTimer = setInterval(changeSlide, 3000);
}

nextSlideBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % images.length;
  sliderImg.src = images[currentSlide];
  setSliderActiveDot();
  autoSlideChange();
});

prevSlideBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  sliderImg.src = images[currentSlide];
  setSliderActiveDot();
  autoSlideChange();
});

autoSlideChange();
