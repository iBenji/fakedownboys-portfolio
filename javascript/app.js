// Бегущая строка
function resetTranslation(element) {
  var parentWidth = element.parentNode.offsetWidth;
  var elementWidth = element.offsetWidth;
  if (elementWidth > parentWidth) {
    var translation = elementWidth - parentWidth;
    element.style.transform = "translateX(" + translation + "px)";
  }
}

var runnerline = document.getElementById("runnerline");
var items = runnerline.getElementsByClassName("header-runnerline__item");

for (var i = 0; i < items.length; i++) {
  resetTranslation(items[i]);
}

window.addEventListener("resize", function () {
  for (var i = 0; i < items.length; i++) {
    resetTranslation(items[i]);
  }
});

// Получаем текущую дату
var currentDate = new Date();
// Получаем год из текущей даты
var currentYear = currentDate.getFullYear();
// Находим элемент на вашей странице, где будет отображаться год
var yearElement = document.getElementById("year");
// Присваиваем содержимое элементу года
yearElement.innerHTML = currentYear;

//Swiper reviews
var swiper = new Swiper(".swiperReviews", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Swiper projects
var swiper = new Swiper(".swiperProjects", {
});