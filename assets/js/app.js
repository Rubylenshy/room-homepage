
const navigation = document.querySelectorAll('.navigation');
const mobile_nav = document.querySelectorAll('.mobile-nav-links');

const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function active(){
    for (let i = 0; i < navigation.length; i++) {
        navigation[i].classList.add('active');
        mobile_nav[i].classList.add('active');   
    }
}
function unActive(){
    for (let i = 0; i < navigation.length; i++) {
        navigation[i].classList.remove('active');
        mobile_nav[i].classList.remove('active');   
    }
}


/* Hero Slides */
function plusSlide(n){
    showSlide(slideIndex += n);
}

var slideIndex = 1;
function showSlide(n){
    if (n > slide.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slide.length};
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';    
    }
    slide[slideIndex - 1].style.display = 'initial';
}

