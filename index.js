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

// let intro = document.getElementById("intro");
// let about = document.getElementById("about");

// window.addEventListener("scroll", function() {
//     let value = window.scrollY;
//     console.log("scrollY", value);

//     if (value < 400) {
//         about.style.animation ='fade-out 0s ease-out forwards';
//     } else if (value < 1300) {
//         about.style.animation ='fade-in 1s ease-out';
//     } else {
//         about.style.animation ='fade-out 2s ease-out forwards';
//     }
// });