// Пишемо свій слайдер зображень, який повинен:
// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами
// Змінювати кожні 3 секунди зображення (масив з 5+ зображень)

const images = [
  './images/1.jpg',
  './images/2.png',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
  './images/7.jpg',
  './images/8.jpg',
  './images/9.jpg',
  './images/10.jpg',
];

let sliderItem = document.querySelector('.slider-item');
let currentSlide = 0;

let sliderImg = document.createElement('img');
sliderImg.src = images[currentSlide];

sliderItem.appendChild(sliderImg);

let nextSlideBtn = document.getElementById('imageNext');
nextSlideBtn.addEventListener('click', () => {
  currentSlide += 1;

  if (currentSlide >= images.length) {
    currentSlide = 0;
  }

  sliderImg.src = images[currentSlide];
  setSliderActiveDot();

  autoSlideChange();
});

let prevSlideBtn = document.getElementById('imagePrev');
prevSlideBtn.addEventListener('click', () => {
  currentSlide -= 1;

  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }

  sliderImg.src = images[currentSlide];
  setSliderActiveDot();

  autoSlideChange();
});

let sliderDots = document.querySelector('.slider-nav-dots');

generateSliderDots = () => {
  images.forEach((image, index) => {
    let sliderDotItem = document.createElement('li');
    sliderDotItem.classList.add('slider-dot');

    if (index === currentSlide) {
      sliderDotItem.classList.add('is-active');
    }

    sliderDotItem.addEventListener('click', () => {
      currentSlide = index;
      sliderImg.src = images[currentSlide];

      setSliderActiveDot();

      autoSlideChange();
    });

    sliderDots.appendChild(sliderDotItem);
  });
};

generateSliderDots();

setSliderActiveDot = () => {
  document.querySelectorAll('.slider-dot').forEach((dotItem, index) => {
    console.log(currentSlide, 'currentSlide');

    if (index === currentSlide) {
      dotItem.classList.add('is-active');
    } else {
      dotItem.classList.remove('is-active');
    }
  });
};

changeSlide = () => {
  currentSlide += 1;

  if (currentSlide >= images.length) {
    currentSlide = 0;
  }

  sliderImg.src = images[currentSlide];
  setSliderActiveDot();
};

let autoTimer = 0;
autoSlideChange = () => {
  clearInterval(autoTimer);

  autoTimer = setInterval(function () {
    changeSlide();
  }, 3000);
};

autoSlideChange();
