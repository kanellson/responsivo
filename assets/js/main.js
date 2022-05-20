
const btnMenuMobile = document.querySelector('.btn-menu-mobile');
const navigationNav = document.querySelector('.navigation-nav');
const submenuFull = document.querySelector('.show-menu');
const closeFullMenu = document.querySelector('.close-full-menu');
const fullMenuSecundary = document.querySelector('.full-menu-secundary');

btnMenuMobile.addEventListener('click', () => {
   navigationNav.classList.toggle('toggle-menu-mobile');
});


const openSubmenuFull = () => {
  fullMenuSecundary.classList.toggle('hidden-menu');
}

submenuFull.addEventListener('click', openSubmenuFull)



closeFullMenu.addEventListener('click', () => {

  fullMenuSecundary.classList.add('hidden-menu');
   // window.location.href = window.location.href

});
