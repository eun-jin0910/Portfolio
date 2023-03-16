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


let header = document.querySelector("header");
// let content = document.querySelectorAll(".main-content").getBoundingClientRect();
let about = document.querySelector("#about").getBoundingClientRect();
let project = document.querySelector("#project").getBoundingClientRect();

console.log(about);
console.log(project);

let headerHeight = header.getBoundingClientRect().height;
let aboutStart = about.y - about.height;
let projectStart = project.y - project.height;

console.log(aboutStart);
console.log(projectStart);




window.addEventListener('scroll', function(){
    // console.log(window.innerHeight);
    // console.log(headerHeight);
    // if (window.innerHeight <= headerHeight - 400) {
    //     window.scrollTo({ top: headerHeight , left: 0, behavior: 'smooth' });
    // }
    // if (about.getBoundingClientRect().bottom - 400 <= window.innerHeight){
    //     // console.log(window.scrollY);
    //     // project.scrollIntoView({ top: project.top + 80, behavior: 'smooth' });
    //     window.scrollTo({ top: projectHeight , left: 0, behavior: 'smooth' });
    // }
    let y = this.window.scrollY;
    if (about.y - 400 < y && y < about.y) {
        window.scrollTo({ top: about.bottom , left: 0, behavior: 'auto' });
    }




});