let headerBurger = document.querySelector('.header__burger');
let headerNavMobile = document.querySelector('.header__mobile-nav');
let deliveryFullText = document.querySelector('.delivery__fulltext');
let deliveryFog = document.querySelector('.delivery__fog');
let deliveryBody = document.querySelector('.delivery__body');
let filtersCross = document.querySelector('.filters__cross');
let filter = document.querySelector('.filters');
let productWindowCross = document.querySelector('.product-window__cross');
let productWindowCard = document.querySelector('.product-window__card');
let productWindow = document.querySelector('.product-window')
let dom = document;
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
});

deliveryFullText.addEventListener('click', function() {
    deliveryFullText.classList.toggle('active');
    deliveryFog.classList.toggle('appear');
    deliveryBody.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function(){
    const filtersBtn = document.querySelectorAll('.filters-btn');
    filtersBtn.forEach(b => b.addEventListener('click', function(){
        filter.classList.add('active')
    }));
});

filtersCross.addEventListener('click', function() {
    filter.classList.remove('active');
});

productWindowCross.addEventListener('click', function() {
    productWindowCard.classList.remove('active')
    productWindow.classList.remove('active')
})

document.addEventListener('DOMContentLoaded', function(){
    const productBtn = document.querySelectorAll('.product__pizza .product__btn');
    productBtn.forEach(b => b.addEventListener('click', function(){
        productWindow.classList.add('active')
        productWindowCard.classList.add('active')
    }));
});

let headerShop = document.querySelector('.header__shop');
let shoppingCart = document.querySelector('.shopping-cart');
let shoppingCartCross = document.querySelector('.shopping-cart__cross');

shoppingCartCross.addEventListener('click', function() {
    shoppingCart.classList.remove('active') 
})

headerShop.addEventListener('click', function() {
    shoppingCart.classList.add('active')    
})