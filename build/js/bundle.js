"use strict";

document.querySelectorAll('.expandButton').forEach(function (button) {
  button.addEventListener('click', function () {
    var extraContent = this.nextElementSibling;
    if (extraContent.classList.contains('hidden')) {
      extraContent.classList.remove('hidden');
    } else {
      extraContent.classList.add('hidden');
    }
  });
});
var currentIndex = 0;
function showSlide(index) {
  var slides = document.querySelectorAll('.carousel-item');
  var indicators = document.querySelectorAll('.carousel-indicators button');
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  var offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = "translateX(".concat(offset, "%)");
  indicators.forEach(function (indicator) {
    return indicator.classList.remove('active');
  });
  indicators[currentIndex].classList.add('active');
}
function nextSlide() {
  showSlide(currentIndex + 1);
}
function prevSlide() {
  showSlide(currentIndex - 1);
}
function currentSlide(index) {
  showSlide(index);
}
document.querySelectorAll('.carousel-indicators button').forEach(function (indicator, index) {
  indicator.addEventListener('click', function () {
    return currentSlide(index);
  });
});

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);