// 슬라이더
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

// 타이핑 효과
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
        setTimeout(underlineDraw, 10);
    }
}

const underline = document.getElementById("under-line");
function underlineDraw() {
    underline.style.animation = 'underline 1s ease-out forwards';
    setTimeout(imgChange, 80);
}

function imgChange() {
    const profileImg = document.getElementById("profile-img");
    profileImg.src = "./img/after.png";
}

setTimeout(typingEffect1, 800);

// 메뉴바 클릭시 스크롤 부드럽게 이동
function smoothScroll(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// 페이지 스크롤 효과
function scrollHandler() {
    // 현재 스크롤 위치
    const scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
    // 현재 뷰포트 높이
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    const header = document.querySelector('header').offsetHeight;
    let screenHeight = windowHeight - header;
    if (screenHeight > 500) {
        if (500 <= scrollPosition && scrollPosition <= screenHeight) {
            window.scrollTo({ top: screenHeight});
        } else if (screenHeight + 500 <= scrollPosition && scrollPosition <= screenHeight * 2) {
            window.scrollTo({ top: screenHeight * 2});
        } else if (screenHeight * 2 + 500 <= scrollPosition && scrollPosition <= screenHeight * 3) {
            window.scrollTo({ top: screenHeight * 3});
        } else if (screenHeight * 3 + 500 <= scrollPosition && scrollPosition <= screenHeight * 4) {
            window.scrollTo({ top: screenHeight * 4});
        }
    }
}

let prevScrollpos = window.scrollY;
window.addEventListener('scroll', function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos < currentScrollPos) {
        scrollHandler();
    }
    prevScrollpos = currentScrollPos;
});

// top 버튼
const topBtn = document.getElementById("top-btn");
topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
