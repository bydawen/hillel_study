// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення, отримане випадковим чином (Math.random)

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

let imageContainer = document.querySelector('.image-block');
let imgBtn= document.getElementById('image-view');

imgBtn.addEventListener('click',() => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imageSrc = images[randomIndex];

  let imageChecker = document.querySelector('.image-block img');

  if (!imageChecker) {
    const imageItem = document.createElement('img');
    imageContainer.appendChild(imageItem);

    imageItem.id='imageShow';
  }

  document.getElementById('imageShow').src = imageSrc;

});
