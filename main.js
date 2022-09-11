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


nextBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
});

previusBtn.addEventListener('click', ()=>{
    changePreviusImage(imageContainer);
});

//Mostrar - Ocular menu vertical

let menuBtn = document.querySelector('.header__menu');
let modalNavbar = document.querySelector('.modal-navbar');
let navbarCloseBtn = document.querySelector('.modal-navbar__close-icon');
let modalNavbarBackground = document.querySelector('.modal-navbar__background');

navbarCloseBtn.addEventListener('click', ()=>{
    modalNavbarBackground.style.display = 'none';
});

menuBtn.addEventListener('click', ()=>{
    modalNavbar.style.display = 'block';
    modalNavbarBackground.style.display = 'block';
});

modalNavbarBackground.addEventListener('click', ()=>{
    modalNavbarBackground.style.display = 'none';
});

// Agregar numeros al input
let inputMinus = document.querySelector('.input__minus');
let inputPlus = document.querySelector('.input__plus');
let inputNumber = document.querySelector('.input__number');
let productCounter = 0;

inputMinus.addEventListener('click', ()=>{
    productCounter--;
    inputNumber.value = productCounter;
});

inputPlus.addEventListener('click', ()=>{
    productCounter++;
    inputNumber.value = productCounter;
});

//Agregar Elementos al carrito
let headerCartNotification = document.querySelector('.header__cart--notification');
let addToCartBtn = document.querySelector('.details__button');

let productCartNumber = 0;
addToCartBtn.addEventListener('click', ()=>{
    productCartNumber = productCartNumber + parseInt(inputNumber.value)
    headerCartNotification.innerText = productCartNumber;

    

    if(headerCartNotification.innerText == 0){
        headerCartNotification.style.display = 'none'
    }else{
        headerCartNotification.style.display = 'block'
        let cartModalCheckoutContainer = document.querySelector('.cart-modal__checkout-container')



        cartModalCheckoutContainer.innerHTML = `
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="./images/image-product-1.jpg" alt="">
            <div>
            <p class="cart-modal__product">Autum Limited Edition...</p>
            <p class="cart-modal__price">$125 x 3 <span>$375.00</span></p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="">
        </div>
        <button class="cart-modal__checkout-btn">Checkout</button>`
        let priceMultipication = document.querySelector('.cart-modal__price');
        priceMultipication.innerHTML = `$125 x ${productCartNumber} <span>$${productCartNumber*125}</span>`
        deleteCartItems()
    }

});

let cartModalCheckoutContainer = document.querySelector('.cart-modal__checkout-container')
let cartModalDeleteBtn = document.querySelector('.cart-modal__delete');

// Borrar elemento del cart 
function deleteCartItems(){
    cartModalDeleteBtn = document.querySelector('.cart-modal__delete');
    // let cartModalCheckoutBtn = document.querySelector('.cart-modal__checkout-btn');
    // let cartModalCheckoutContainer = document.querySelector('.cart-modal__checkout-container')
    cartModalDeleteBtn.addEventListener('click', event=>{
        console.log('borrado')
        cartModalCheckoutContainer.innerHTML = `<p class="cart-modal__empty">Your cart is empty.</p>`
        // headerCartNotification.innerText = 0;
        headerCartNotification.style.display = 'none'
        productCartNumber = 0;
    });
}

// Mostrar / Ocular modal cart
let cartBtn = document.querySelector('.header__cart');
headerCartNotification.innerText = 0;
let cartModal = document.querySelector('.cart-modal');


cartBtn.addEventListener('click', ()=>{
    console.log(cartModal)
    // cartModal.classList.toggle('show')
    if(cartModal.style.display == 'block'){
        cartModal.style.display = 'none'
    }else{
        console.log(headerCartNotification.innerText)
        if(headerCartNotification.innerText == 0){
            cartModalCheckoutContainer.innerHTML = `<p class="cart-modal__empty">Your cart is empty.</p>`
        }
        cartModal.style.display = 'block'
        console.log(headerCartNotification.innerText)
        if(headerCartNotification.innerText !== '0'){
            deleteCartItems()
        }
    }
});


//Cerrar el modal del cart cuando se hace click fuera de el
function waitClose(){
    document.addEventListener('click', event=>{
        if(event.target.className != 'cart-modal'){
            cartModal.style.display = 'none'; 
        }
    });
}

let imgIndex = 0;
//Abrir el modal de la galeria
let modalGallery = document.querySelector('.modal-gallery__background');
let modalGalleryPrevius = document.querySelector('.modal-gallery__previus');
let modalGalleryNext = document.querySelector('.modal-gallery__next');
let modalGalleryImageContainer = document.querySelector('.modal-gallery__image-container');
let modalGalleryThumnails = document.querySelectorAll('.modal-gallery__thumnail');
modalGalleryThumnails = [...modalGalleryThumnails];
let modalGalleryClose = document.querySelector('.modal-gallery__close');
let modalGalleryBackground = document.querySelector('.modal-gallery__background');

imageContainer.addEventListener('click', event=>{
    if(event.target.className == 'gallery__image-container'){
        modalGallery.style.display = 'block';
    }
    modalGalleryThumnails[0].style.border = '2px solid hsl(26, 100%, 55%)';
});

modalGalleryPrevius.addEventListener('click', ()=>{
    changePreviusImage(modalGalleryImageContainer);
});
modalGalleryNext.addEventListener('click', ()=>{
    changeNextImage(modalGalleryImageContainer);
});

modalGalleryThumnails.forEach(thumnail=>{
    thumnail.addEventListener('click', event=>{
        let id = event.target.id.slice(-1);
        console.log(id);
        chanceImageById(id, modalGalleryImageContainer, modalGalleryThumnails)
    });
});

modalGalleryClose.addEventListener('click', ()=>{
    modalGallery.style.display = 'none';
});

modalGalleryBackground.addEventListener('click', event=>{
    if(event.target.className === 'modal-gallery__background'){
        modalGallery.style.display = 'none';
    }
});

//Cambiar thumnails de la vista desktop
let galleryThumnail = document.querySelectorAll('.gallery__thumnail');
let galleryThumnailsContainer = document.querySelectorAll('.gallery__thumnails');
let galleryImageContainer = document.querySelector('.gallery__image-container');

galleryThumnail = [...galleryThumnail];
galleryThumnail[0].style.border = '2px solid hsl(26, 100%, 55%)';

galleryThumnail.forEach(thumnail=>{
    thumnail.addEventListener('click', event=>{
        let id = event.target.id.slice(-1);
        console.log(id)
        chanceImageById(id, galleryImageContainer, galleryThumnail)
    });
});

//Funciones:


function changeNextImage(imageContainer){
    if (imgIndex == 3){
        imgIndex = 0;
    }else{
        imgIndex++;
    }
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex+1}.jpg')`;
    eraseThumnailStile(modalGalleryThumnails)
    modalGalleryThumnails[imgIndex].style.border = '2px solid hsl(26, 100%, 55%)'
}

function changePreviusImage(imageContainer){
    if (imgIndex == 0){
        imgIndex = 3;
    }else{
        imgIndex--;
    }
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex+1}.jpg')`;
    eraseThumnailStile(modalGalleryThumnails)
    modalGalleryThumnails[imgIndex].style.border = '2px solid hsl(26, 100%, 55%)'
}
function eraseThumnailStile(thumnails){
    thumnails.forEach(thumnail=>{
        thumnail.style.border = 'none'
    });
}
function chanceImageById(id, imageContainer, thumnailsContainer){  
    imgIndex = id-1; 
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex+1}.jpg')`;
    eraseThumnailStile(thumnailsContainer)
    thumnailsContainer[imgIndex].style.border = '2px solid hsl(26, 100%, 55%)'
}