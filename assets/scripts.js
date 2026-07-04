const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled");

}

else{

header.classList.remove("scrolled");

}

});
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navLinks.classList.toggle("active");

});
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        navLinks.classList.remove("active");

    });

});
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

setInterval(nextSlide,5000);
// reviews section
const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/100;

function update(){

if(count<target){

count+=speed;

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

});

observer.disconnect();

}

});

});

observer.observe(document.querySelector(".stats"));
