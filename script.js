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

let  paginas = document.querySelectorAll(".pagina")
let  paginasArray = Array.from(paginas) ;
function avanzarPagina(){
  let actual = paginasArray.findIndex(p => !p.classList.contains("paginaInvisible"));
  if(paginasArray.length - 1 > actual){
  paginasArray[actual].classList.remove("paginaVisible");
  paginasArray[actual].classList.add("paginaInvisible");

  let siguiente = (actual + 1);

    paginasArray[siguiente].classList.remove("paginaInvisible");
    paginasArray[siguiente].classList.add("paginaVisible");
  }
  }

  function retrocederPagina(){
    let actual = paginasArray.findIndex(p => !p.classList.contains("paginaInvisible"));
    if(actual > 0){
      paginasArray[actual].classList.remove("paginaVisible");
      paginasArray[actual].classList.add("paginaInvisible");

      let anterior =(actual - 1);
      paginasArray[anterior].classList.remove("paginaInvisible");
      paginasArray[anterior].classList.add("paginaVisible");

    }
  }


