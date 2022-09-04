let closeIcon = document.querySelector('.navbar__close-icon');
let modalNavbar = document.querySelector('.modal-navbar');

closeIcon.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});