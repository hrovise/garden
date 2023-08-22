//= ../../../node_modules/masonry-layout/dist/
//= ./components/layout.js
//= ./components/navpanel.js
//= ./components/navigation.js
//= ./components/search.js
//= ./components/modal.js
//= ./components/expand.js

let slides = document.getElementsByClassName('slider_item');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let intro = document.querySelector('.intro__full');
let backgroundIndex=0;

let slideIndex=1;
showSlides(slideIndex);
function showSlides(n){
if(n>slides.length) {
    slideIndex=1;
}
if(n<1) {
    slideIndex=slides.length;
    console.log("condition", slideIndex)
}
for(let i=0;i<slides.length;i++){
    slides[i].style.display='none';
}
slides[slideIndex-1].style.display='inline-block';

if(backgroundIndex==0){
    intro.style.backgroundColor = "#DCC1AB";
    console.log(intro.style.backgroundColor);
    backgroundIndex++;
} else{
intro.style.backgroundColor = "#80d39d";
backgroundIndex=0;
}
}

function plusSlide(n){
    console.log(n)
    showSlides(slideIndex+=n);


}

prev.addEventListener('click', function(event){
    event.preventDefault();
    
    plusSlide(-1);
 }, true)
next.addEventListener('click', function(event){
    event.stopPropagation();
    
   plusSlide(1);
}, true)
