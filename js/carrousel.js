var slide_big_carrousel = document.querySelectorAll(".slide_big_carrousel");
var slide_small_carrousel = document.querySelectorAll(".slide_small_carrousel");
var indiceActual1 = 0;
var indiceActual2 = 0;

function mostrarDiapositiva1(n) {
  slide_big_carrousel[indiceActual1].style.display = "none";
  indiceActual1 = (n + slide_big_carrousel.length) % slide_big_carrousel.length;
  slide_big_carrousel[indiceActual1].style.display = "block";
}

document.querySelector(".boton1-siguiente").addEventListener("click", function() {
  mostrarDiapositiva1(indiceActual1 + 1);
});

document.querySelector(".boton1-anterior").addEventListener("click", function() {
  mostrarDiapositiva1(indiceActual1 - 1);
});


function mostrarDiapositiva2(n) {
  slide_small_carrousel[indiceActual2].style.display = "none";
  indiceActual2 = (n + slide_small_carrousel.length) % slide_small_carrousel.length;
  slide_small_carrousel[indiceActual2].style.display = "block";
}

document.querySelector(".boton2-siguiente").addEventListener("click", function() {
  mostrarDiapositiva2(indiceActual2 + 1);
});

document.querySelector(".boton2-anterior").addEventListener("click", function() {
  mostrarDiapositiva2(indiceActual2 - 1);
});