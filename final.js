$(document).ready(function() {
    let currentIndex = 0;
    const totalSlides = $('.pic').length;

    function showSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        const slideWidth = $('.pic').width();
        const translateValue = -currentIndex * slideWidth;

        $('.img_carousel_inner').css('transition', 'transform 0.5s ease-in-out');
        $('.img_carousel_inner').css('transform', `translateX(${translateValue}px)`);
    }

    window.nextSlide = function() {
        showSlide(currentIndex + 1);
    };

    window.prevSlide = function() {
        showSlide(currentIndex - 1);
    };
});
