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
    slides.style.transform = `translateX(-${slideIndex * (100 / slides.children.length)}%)`;
});

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    slideIndex++;
    if (slideIndex > slides.children.length - 1) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(-${slideIndex * (100 / slides.children.length)}%)`;
});

var typingText1 = "지속적인 학습과 열정으로 성장하는 ".split('');
var typingText2 = "백엔드 개발자,".split('');
var typingText3 = "이은진".split('');
var typingText4 = "입니다.".split('');

var span1 = document.getElementById('intro-text-1');
var span2 = document.getElementById('intro-text-2');
var span3 = document.getElementById('intro-text-3');
var span4 = document.getElementById('intro-text-4');

var typingResult1 = "";
var typingResult2 = "";
var typingResult3 = "";
var typingResult4 = "";

function typingEffect1() {
    if (typingText1.length > 0) {
        typingResult1 += typingText1.shift();
        span1.textContent = typingResult1;
        setTimeout(typingEffect1, 70);
    } else {
        setTimeout(typingEffect2, 300);
    }
}

function typingEffect2() {
    if (typingText2.length > 0) {
        typingResult2 += typingText2.shift();
        span2.textContent = typingResult2;
        setTimeout(typingEffect2, 70);
    } else {
        setTimeout(typingEffect3, 200);
    }
}

function typingEffect3() {
    if (typingText3.length > 0) {
        typingResult3 += typingText3.shift();
        span3.textContent = typingResult3;
        setTimeout(typingEffect3, 70);
    } else {
        setTimeout(typingEffect4, 70);
    }
}

function typingEffect4() {
    if (typingText4.length > 0) {
        typingResult4 += typingText4.shift();
        span4.textContent = typingResult4;
        setTimeout(typingEffect4, 70);
    } else {
        setTimeout(uncerlineDraw, 10);
    }
}

const underline = document.getElementById("under-line");
function uncerlineDraw() {
    underline.style.animation = 'underline 1s ease-out forwards';
}

typingEffect1();

