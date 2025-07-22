let carrito = [];

document.addEventListener('DOMContentLoaded', function() {
  cargarCarrito();
  mostrarCarrito();
});

function cargarCarrito() {
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
}

function mostrarCarrito() {
  const contenido = document.getElementById('carrito-contenido');
  const totalDiv = document.getElementById('carrito-total');
  const vacioDiv = document.getElementById('carrito-vacio');
  
  contenido.innerHTML = ''; // Limpiar el contenido anterior
  
  if (carrito.length === 0) {
    vacioDiv.style.display = 'block';
    totalDiv.style.display = 'none';
    return;
  }
  
  vacioDiv.style.display = 'none';
  totalDiv.style.display = 'block';
  
  let total = 0;
  
  carrito.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'carrito-item';
    itemDiv.innerHTML = `
      <div class="item-info">
        <div class="item-nombre">${item.nombre}</div>
        <div class="item-precio">$${item.precio.toLocaleString()}</div>
      </div>
      <div class="item-cantidad">
        <button class="btn-cantidad" onclick="cambiarCantidadCarrito(${index}, -1)">-</button>
        <span>${item.cantidad}</span>
        <button class="btn-cantidad" onclick="cambiarCantidadCarrito(${index}, 1)">+</button>
      </div>
      <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    
    contenido.appendChild(itemDiv);
    total += item.precio * item.cantidad;
  });
  
  document.getElementById('total-precio').textContent = total.toLocaleString();
  actualizarEnlaceWhatsApp();
}

function cambiarCantidadCarrito(index, cambio) {
  if (carrito[index]) {
    carrito[index].cantidad += cambio;
    
    if (carrito[index].cantidad <= 0) {
      carrito.splice(index, 1);
    }
    
    guardarCarrito();
    mostrarCarrito();
  }
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  mostrarCarrito();
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarEnlaceWhatsApp() {
  const btnWhatsApp = document.getElementById('btn-whatsapp');
  let mensaje = 'Hola! Me interesa comprar los siguientes productos:\n\n';
  let total = 0;
  
  carrito.forEach(item => {
    mensaje += `• ${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toLocaleString()}\n`;
    total += item.precio * item.cantidad;
  });
  
  mensaje += `\nTotal: $${total.toLocaleString()}`;
  
  const mensajeCodificado = encodeURIComponent(mensaje);
  btnWhatsApp.href = `https://wa.me/573018458871?text=${mensajeCodificado}`;

}