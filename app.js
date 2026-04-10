let cantidadProductos = 0;
let totalAcumulado = 0;

let contadorCarrito = document.getElementById("contador-carrito");
let botones = document.querySelectorAll(".btn-agregar");
let listaCarrito = document.getElementById("lista-carrito");
let totalProductos = document.getElementById("total");
let botonVaciar = document.getElementById("btn-vaciar");
let mensajeVacio = document.getElementById("mensaje-vacio");

function updateBadge() {
  contadorCarrito.textContent = cantidadProductos;
}


function updateTotal() {
  totalProductos.textContent = totalAcumulado;
}


function agregarProducto(cuenta) {
  let precio = Number(cuenta.target.dataset.precio);
  let nombre = cuenta.target.dataset.nombre;
  totalAcumulado = totalAcumulado + precio;
  cantidadProductos++;

  mensajeVacio.style.display = "none";

  updateTotal();
  updateBadge();

  let nuevoItem = document.createElement("li");
  nuevoItem.textContent = nombre + " - $" + precio;

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "X";

  botonEliminar.addEventListener("click", () => {
    eliminarItem(nuevoItem, precio);
  });

  nuevoItem.appendChild(botonEliminar);
  listaCarrito.appendChild(nuevoItem);
}


function eliminarItem(li, precio) {
  li.remove();
  totalAcumulado = totalAcumulado - precio;
  cantidadProductos = cantidadProductos - 1;

  if (cantidadProductos === 0) {
    mensajeVacio.style.display = "block";
  }

  updateTotal();
  updateBadge();
}


botones.forEach((boton) => {
  boton.addEventListener("click", agregarProducto);
});


botonVaciar.addEventListener("click", () => {
  listaCarrito.innerHTML = "";
  totalAcumulado = 0;
  cantidadProductos = 0;
  mensajeVacio.style.display = "block";
  updateTotal();
  updateBadge();
});
