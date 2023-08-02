console.log('Валидность вёрстки: 10/10 \n Семантичность вёрстки: 16/16 \n Соответствие макету: 54/54 \n Общие требования: 20/20 ')


let stopMenu = function stopMenu() {
    document.getElementById('nav.menu').classList.remove('navigation__list--closed');
};

let openBurgerMenu = function() {
    document.getElementById('burger.btn').classList.toggle('burger__menu--opened');
    document.getElementById('nav.menu').classList.toggle('navigation__list--opened');
    
    
    if (!document.getElementById('nav.menu').classList.contains('navigation__list--opened')) {

        document.getElementById('nav.menu').classList.add('navigation__list--closed');
        setTimeout(stopMenu, 1000);
    }
    else {
        document.getElementById('nav.menu').classList.remove('navigation__list--closed');
    }

}

let burgerMenuClose =  function() {

    if (document.getElementById('nav.menu').classList.contains('navigation__list--opened') && document.getElementById('burger.btn').classList.contains('burger__menu--opened')) {
        document.getElementById('burger.btn').classList.remove('burger__menu--opened');
        document.getElementById('nav.menu').classList.add('navigation__list--closed');
        setTimeout(stopMenu, 1000);
        document.getElementById('nav.menu').classList.remove('navigation__list--opened');
    }

};
let burgerWrapper = document.querySelector('.burger--wrapper');

let burgerLinks = document.querySelectorAll('.navigation__item')

document.getElementById('burger.btn').onclick = openBurgerMenu;

document.addEventListener('click', (e) => {
    let closedZone = e.composedPath().includes(document.getElementById('nav.menu')) || e.composedPath().includes(document.getElementById('burger.btn')) || e.composedPath().includes(document.getElementById('login.btn')) ;

    if (!closedZone) {
        console.log('CLOSED!!!');
        burgerMenuClose();
    }
})

    for(i = 0; i < burgerLinks.length;i++) {

        burgerLinks[i].addEventListener('click', burgerMenuClose);

}


