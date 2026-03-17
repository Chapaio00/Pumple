const btn = document.getElementById('btnMostrar');
const mensaje = document.getElementById('mensaje');

btn.addEventListener('click', () => {
  mensaje.classList.toggle('mensajeVisible');
}); 

const btnImg = document.querySelector('.aside button');
const aside = document.querySelector('.aside');
btnImg.addEventListener('click', () => {
  aside.classList.toggle('show')
})