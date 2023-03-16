const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let slideIndex = 0;

prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    }
    slides.style.transform = `translateX(-${slideIndex * 33.33}%)`;
});

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    slideIndex++;
    if (slideIndex > slides.children.length - 1) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * 33.33}%)`;
});

