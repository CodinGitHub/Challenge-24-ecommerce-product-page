// Cambio de imagenes desde botones
let imgArray = [
    '../images/image-product-1.jpg',
    '../images/image-product-2.jpg',
    '../images/image-product-3.jpg',
    '../images/image-product-4.jpg',
]

let nextBtn = document.querySelector('.gallery__next');
let previusBtn = document.querySelector('.gallery__previus');
let imageContainer = document.querySelector('.gallery__image-container');
let imgIndex = 1;

nextBtn.addEventListener('click', ()=>{
    if (imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
});

previusBtn.addEventListener('click', ()=>{
    if (imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
});

//Mostrar - Ocular menu vertical

let menuBtn = document.querySelector('.header__menu');
let navbar = document.querySelector('.navbar');
let navbarCloseBtn = document.querySelector('.navbar__close-icon');
let modalNavbarBackground = document.querySelector('.modal-navbar__background');

navbarCloseBtn.addEventListener('click', ()=>{
    modalNavbarBackground.style.display = 'none';
});

menuBtn.addEventListener('click', ()=>{
    navbar.style.display = 'block';
    modalNavbarBackground.style.display = 'block';
});

modalNavbarBackground.addEventListener('click', ()=>{
    modalNavbarBackground.style.display = 'none';
});

// Agregar numeros al input
let inputMinus = document.querySelector('.input__minus');
let inputPlus = document.querySelector('.input__plus');
let inputNumber = document.querySelector('.input__number');
let counter = 0;

inputMinus.addEventListener('click', ()=>{
    counter--;
    inputNumber.value = counter;
});

inputPlus.addEventListener('click', ()=>{
    counter++;
    inputNumber.value = counter;
});

//Agregar Elementos al carrito
let headerCartNotification = document.querySelector('.header__cart--notification');
let addToCartBtn = document.querySelector('.details__button');

addToCartBtn.addEventListener('click', ()=>{
    headerCartNotification.innerText = inputNumber.value;
    if(headerCartNotification.innerText == 0){
        headerCartNotification.style.display = 'none'
    }else{
        headerCartNotification.style.display = 'block'
    }
});

// Mostrar / Ocular modal cart
let cartBtn = document.querySelector('.header__cart');
let cartModal = document.querySelector('.cart-modal');

cartBtn.addEventListener('click', ()=>{
    console.log(cartModal)
    cartModal.classList.toggle('show')
});