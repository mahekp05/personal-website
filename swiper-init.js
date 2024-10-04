window.onload = function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Enables looping
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000, // Auto-slide every 5 seconds
        },
        slidesPerView: 1, // Show one slide at a time
        spaceBetween: 30, // Adds space between slides
    });
};
