const hamburguer = document.querySelector('[menu-button]');
const menu = document.querySelector('[menu-mobile]');

const escondeMostra = () => {
    menu.classList.toggle('esconde-menu');
}

hamburguer.onclick = escondeMostra;



