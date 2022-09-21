const hamburger = document.querySelector('.hamburger'); 
const hamburger_close = document.querySelector('.hamburger-close'); 
const navigation = document.querySelector('.navigation');
const mobile_nav = document.querySelector('.mobile-nav-links');

const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

hamburger.addEventListener('click', function(){
    navigation.classList.add('active');
    mobile_nav.classList.add('active');
});
hamburger_close.addEventListener('click', function(){
    navigation.classList.remove('active');
    mobile_nav.classList.remove('active');
});


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

