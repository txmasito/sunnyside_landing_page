const button = document.getElementById('button-menu');
const menu = document.getElementById('nav-menu');
// const background = document.getElementById('background');

button.addEventListener('click', () => {
    menu.classList.toggle('list-menu-content-show');
    console.log('funciona');
})