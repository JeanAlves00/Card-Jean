document.querySelectorAll('.expandButton').forEach(button => {
    button.addEventListener('click', function () {
        const extraContent = this.nextElementSibling;
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
  
