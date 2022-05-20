
const btnMenuMobile = document.querySelector('.btn-menu-mobile');
const navigationNav = document.querySelector('.navigation-nav');

btnMenuMobile.addEventListener('click', () => {
   navigationNav.classList.toggle('toggle-menu-mobile');
});

const closeFullMenu = document.querySelector('.close-full-menu');
const fullMenuSecundary = document.querySelector('.full-menu-secundary');


closeFullMenu.addEventListener('click', () => {
   
   fullMenuSecundary.classList.add('sub-full-menu');
   // window.location.href = window.location.href

});