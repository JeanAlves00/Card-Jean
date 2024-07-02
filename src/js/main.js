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

let currentIndex = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.carousel-indicators button');
            if (index >= slides.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex = index;
            }
            const offset = -currentIndex * 100;
            document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
            indicators.forEach(indicator => indicator.classList.remove('active'));
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

        document.querySelectorAll('.carousel-indicators button').forEach((indicator, index) => {
            indicator.addEventListener('click', () => currentSlide(index));
        });

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
  
