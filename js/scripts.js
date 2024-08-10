document.addEventListener('DOMContentLoaded', function() {
    var testimonials = document.querySelector('.testimonials');
    new simpleParallax(testimonials, {
        scale: 1.5,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const totalCards = document.querySelectorAll('.testimonial-card').length;
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        nextButton.click();
    }, 5000);
});


