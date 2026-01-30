document.addEventListener("DOMContentLoaded", function () {
    // Handle navigation links
    document.querySelectorAll('nav a').forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle section box links
    document.querySelector('.box-services').addEventListener('click', function () {
        window.location.href = "https://adarsh26001.github.io/services/";
    });

    document.querySelector('.box-products').addEventListener('click', function () {
        window.location.href = "https://bezondhiedpvtltd.wordpress.com/";
    });

    document.querySelector('.box-innovation').addEventListener('click', function () {
        window.location.href = "https://bezondhiedpvtltd.wordpress.com/";
    });

    document.querySelector('.box-hiring').addEventListener('click', function () {
        window.location.href = "https://adarsh26001.github.io/hiring/";
    });

    document.querySelector('.box-getintouch').addEventListener('click', function () {
        window.location.href = "https://adarsh26001.github.io/getintouch/";
    });

    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slideshow img");
    const showSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? "block" : "none";
        });
        slideIndex = (slideIndex + 1) % slides.length;
    };
    showSlides();
    setInterval(showSlides, 3000); // Change image every 3 seconds
});
