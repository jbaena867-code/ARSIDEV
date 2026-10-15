const boton = document.querySelector('.btn-menu');
const menu = document.getElementById('menu');   

boton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', String(isOpen));
    boton.innerHTML = isOpen ? 'X' : '☰';
});
