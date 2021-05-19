const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',open);
close.Menu.addEventListener('click',close);

function show(){
    mainMenu.Menu.style.display='flex';
    mainMenu.style.top='0';
}

function close() {
    mainMenu.Menu.style.top ='-100%';
}