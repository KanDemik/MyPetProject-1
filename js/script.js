let headerBurger = document.querySelector('.header__burger');
let headerNavMobile = document.querySelector('.header__mobile-nav');
let deliveryFullText = document.querySelector('.delivery__fulltext');
let deliveryFog = document.querySelector('.delivery__fog');
let deliveryBody = document.querySelector('.delivery__body');
var doc, bod, htm;

addEventListener('load', function(){
    doc = document;
    bod = doc.body;
    htm = doc.documentElement;
    addEventListener('scroll', function(){
        doc.querySelector('.header__nav-hidden').style.display = htm.scrollTop > 100 ? 'block' : 'none'
    });
});

headerBurger.addEventListener('click', function() {
    headerBurger.classList.toggle('active');
    headerNavMobile.classList.toggle('active');
})

deliveryFullText.addEventListener('click', function() {
    deliveryFullText.classList.toggle('active');
    deliveryFog.classList.toggle('appear');
    deliveryBody.classList.toggle('active');
})
