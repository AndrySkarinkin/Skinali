let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.menu')

function activeMenu(){
   menu.classList.toggle('menu-active');
};

menuButton.addEventListener('click',activeMenu);