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
  contadorCarrito.classList.remove("bump");
  void contadorCarrito.offsetWidth;
  contadorCarrito.classList.add("bump");
  setTimeout(() => contadorCarrito.classList.remove("bump"), 300);
}

function updateTotal() {
  totalProductos.textContent = "$" + totalAcumulado.toLocaleString("es-CO");
}

function agregarProducto(cuenta) {
  let boton = cuenta.target.closest(".btn-agregar");
  if (!boton) return;
  let precio = Number(boton.dataset.precio);
  let nombre = boton.dataset.nombre;
  totalAcumulado += precio;
  cantidadProductos++;

  mensajeVacio.style.display = "none";

  updateTotal();
  updateBadge();

  boton.classList.add("added");
  setTimeout(() => boton.classList.remove("added"), 400);

  let nuevoItem = document.createElement("li");

  let textoSpan = document.createElement("span");
  textoSpan.textContent = nombre + " — $" + precio.toLocaleString("es-CO");
  nuevoItem.appendChild(textoSpan);

  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "✕";
  botonEliminar.setAttribute("aria-label", "Eliminar " + nombre);

  botonEliminar.addEventListener("click", () => {
    eliminarItem(nuevoItem, precio);
  });

  nuevoItem.appendChild(botonEliminar);
  listaCarrito.appendChild(nuevoItem);
}

function eliminarItem(li, precio) {
  li.classList.add("removing");
  setTimeout(() => {
    li.remove();
    totalAcumulado -= precio;
    cantidadProductos--;

    if (cantidadProductos === 0) {
      mensajeVacio.style.display = "block";
    }

    updateTotal();
    updateBadge();
  }, 220);
}

botones.forEach((boton) => {
  boton.addEventListener("click", agregarProducto);
});

botonVaciar.addEventListener("click", () => {
  const items = listaCarrito.querySelectorAll("li");
  items.forEach((item, i) => {
    setTimeout(() => item.classList.add("removing"), i * 60);
  });

  setTimeout(() => {
    listaCarrito.innerHTML = "";
    totalAcumulado = 0;
    cantidadProductos = 0;
    mensajeVacio.style.display = "block";
    updateTotal();
    updateBadge();
  }, items.length * 60 + 250);
});