// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання,
// при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

'use strict'

let userHref = "";

document.getElementById("user-prompt").addEventListener("click", function () {
  let buttonLink = prompt("Дайте посилання");

  if (!buttonLink.startsWith("https://") && !buttonLink.startsWith("http://")) {
    buttonLink = "https://" + buttonLink;
  }

  userHref = buttonLink;
});

document.getElementById("redirect").addEventListener("click", function () {
  !userHref ? alert("Ви забули надати посилання !!!") : window.location.href = userHref;
});
