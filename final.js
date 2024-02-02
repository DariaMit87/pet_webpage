<<<<<<< HEAD
let currentIndex = 0;

function showSlide(index) {
    const slideWidth = $('.img_container').width();
    $('.img_carousel_inner').css('transform', `translateX(${-index * slideWidth}px)`);
}

function nextSlide() {
    const totalSlides = $('.img_container').length;
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    const totalSlides = $('.img_container').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}



let slideshow = document.getElementById('dogpic');
let images = ["pics/22.webp", "pics/33.webp", "pics/44.webp", "pics/55.webp"]
setInterval(function(){
    let rnd = Math.floor(Math.random()*images.length);
    slideshow.src = images[rnd];
},1200);
=======
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
>>>>>>> b47e4bb5fefb0fa02c921c031826d7400a3f367d
