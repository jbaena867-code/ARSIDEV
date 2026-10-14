// Cuando la página termina de cargar, activamos la animación
// agregando la clase "listo" al <body>. El CSS hace el resto.
window.addEventListener("load", () => {
  document.body.classList.add("listo");
});

// Extra para practicar: al hacer click en el logo se repite la animación.
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  document.body.classList.remove("listo");
  void document.body.offsetWidth;          // fuerza al navegador a reiniciar
  document.body.classList.add("listo");
});
