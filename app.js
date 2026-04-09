let cantidadItems  = 0;
let totalAcumulado = 0;

const listaCarrito = document.querySelector("#lista-carrito");
const totalSpan    = document.querySelector("#total");
const contadorNav  = document.querySelector(".contador-carrito");
const btnVaciar    = document.querySelector("#btn-vaciar");
const msgVacio     = document.querySelector("#msg-vacio");

function updateContador() {
  contadorNav.textContent = cantidadItems;
}

function updateTotal() {
  totalSpan.textContent = `$: ${totalAcumulado}`;
}

function agregarAlCarrito(nombre, precio) {
  msgVacio.style.display = "none";

  const li = document.createElement("li");
  li.classList.add("producto-agregado");
  li.innerHTML = `
    <span>${nombre} - $${precio}</span>
    <button class="btn btn-sm btn-eliminar">X</button>
  `;

  listaCarrito.appendChild(li);

  cantidadItems++;
  totalAcumulado += precio;

  const btnEliminar = li.querySelector(".btn-eliminar");
  btnEliminar.addEventListener("click", () => eliminarItem(li, precio));

  updateContador();
  updateTotal();
}

function eliminarItem(li, precio) {
  li.remove();

  cantidadItems--;
  totalAcumulado -= precio;

  if (cantidadItems === 0) {
    msgVacio.style.display = "block";
  }

  updateContador();
  updateTotal();
}

const botonesAgregar = document.querySelectorAll(".btn-agregar");

botonesAgregar.forEach(boton => {
  boton.addEventListener("click", () => {
    const nombre = boton.dataset.nombre;
    const precio = Number(boton.dataset.precio);
    agregarAlCarrito(nombre, precio);
  });
});

btnVaciar.addEventListener("click", () => {
  const items = listaCarrito.querySelectorAll(".producto-agregado");
  items.forEach(item => item.remove());

  cantidadItems  = 0;
  totalAcumulado = 0;

  msgVacio.style.display = "block";
  updateContador();
  updateTotal();
});