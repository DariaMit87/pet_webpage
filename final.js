let currentIndex = 1;
const totalSlides = $('.img_container').length;

function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    $('.img_carousel_inner').css('transition', 'transform 0.5s ease-in-out');
    $('.img_carousel_inner').css('transform', `translateX(${-currentIndex * 410}px)`);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}