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
},1600);


document.getElementById('myForm').addEventListener('submit', function (event) {
    if (event.target.checkValidity()) {
        reserve();
    } else {
    }
});
function reserve() {
    alert('Thank you for filling the form! Our manager will contact you in about 5 minutes');
}


