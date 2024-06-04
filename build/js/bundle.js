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
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});