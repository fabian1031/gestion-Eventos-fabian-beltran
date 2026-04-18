# 🛒 Mi Tienda — Carrito de Compras

Proyecto de carrito de compras desarrollado con HTML, CSS y JavaScript vanilla. Permite agregar y eliminar productos, ver el total en tiempo real y vaciar el carrito con animaciones fluidas.

---

## 📸 Vista previa

![Vista previa de Mi Tienda](./assets/preview.png)

---

## 🚀 Tecnologías usadas

- **HTML5** — estructura semántica con `<main>`, `<section>`, `<aside>` y `<footer>`
- **CSS3** — layout con Flexbox y CSS Grid, animaciones con `@keyframes`, variables CSS
- **JavaScript (ES6+)** — manipulación del DOM, eventos, lógica del carrito
- **Bootstrap 5.3** — base de estilos y componentes de tarjetas
- **Google Fonts** — tipografías Playfair Display y DM Sans

---

## ✨ Funcionalidades

- Agregar productos al carrito desde las tarjetas
- Eliminar productos individualmente con animación de salida
- Vaciar el carrito completo con animación escalonada
- Contador de ítems en la navbar con efecto de rebote
- Total calculado automáticamente en formato colombiano (`$1.000`)
- Carrito sticky que acompaña el scroll
- Diseño responsive — en móvil el carrito se apila debajo de los productos

---

## 📁 Estructura del proyecto

```
mi-tienda/
├── index.html
├── style.css
├── app.js
├── README.md
└── assets/
    ├── pera.png
    ├── sandia.png
    ├── manzana.png
    └── banano.png
```

---

## ▶️ Cómo ejecutar

1. Clona o descarga el repositorio
2. Asegúrate de tener las imágenes en la carpeta `assets/`
3. Abre `index.html` directamente en el navegador

No requiere instalación de dependencias ni servidor local.

---

## 🎨 Decisiones de diseño

El proyecto usa una paleta **orgánica/natural** inspirada en mercados de frutas frescas:

| Variable | Color | Uso |
|----------|-------|-----|
| `--forest` | `#2d5016` | Botones, títulos, footer |
| `--cream` | `#faf6f0` | Fondo general |
| `--peach` | `#e8825a` | Botones eliminar, contador |
| `--soil` | `#5c3d1e` | Precios |

Las animaciones (`fadeUp`, `slideIn`, `slideOut`, `pulse-green`) están implementadas 100% en CSS para mantener el rendimiento.

---

## 🧠 Aprendizajes clave

- Uso de `event.target.closest()` para capturar correctamente el botón en eventos de clic
- Layout de dos zonas (productos + carrito) con Flexbox sin Bootstrap Grid
- `position: sticky` en el panel del carrito para mejor UX en scroll
- Animaciones de entrada y salida sincronizadas con `setTimeout`

---

## 👤 Fabián Béltran

Desarrollado como proyecto de portafolio personal.