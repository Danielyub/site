
// Datos de productos con información detallada
const productosInfo = {
  'Sudadera Goku': {
    imagen: 'img/sudadera1.jpg',
    descripcion: 'Sudadera premium con diseño exclusivo de Goku. Perfecta para los fanáticos de Dragon Ball.',
    caracteristicas: [
      'Material: 80% Algodón, 20% Poliéster',
      'Tallas disponibles: S, M, L, XL',
      'Diseño impreso en alta calidad',
      'Capucha ajustable',
      'Bolsillo frontal tipo canguro'
    ]
  },
  'Sudadera Ahegao': {
    imagen: 'img/sudadera2.jpg',
    descripcion: 'Sudadera con diseño atrevido y llamativo, perfecta para los fanáticos del anime.',
    caracteristicas: [
      'Material: 85% Algodón, 15% Poliéster',
      'Capucha con forro interior',
      'Bolsillo frontal amplio',
      'Estampado de alta resolución',
      'Tallas disponibles: S, M, L, XL, XXL',
      'Diseño único y exclusivo'
    ]
      },
  'Sudadera Naruto': {
    imagen: 'img/sudadera3.jpg',
    descripcion: 'Sudadera con diseño atrevido y llamativo, perfecta para los fanáticos del anime.',
    caracteristicas: [
      'Material: 85% Algodón, 15% Poliéster',
      'Capucha con forro interior',
      'Bolsillo frontal amplio',
      'Estampado de alta resolución',
      'Tallas disponibles: S, M, L, XL, XXL',
      'Diseño único y exclusivo'
    ]
      },
  'Sudadera One Piece': {
    imagen: 'img/sudadera4.jpg',
    descripcion: 'Sudadera con diseño atrevido y llamativo, perfecta para los fanáticos del anime.',
    caracteristicas: [
      'Material: 85% Algodón, 15% Poliéster',
      'Capucha con forro interior',
      'Bolsillo frontal amplio',
      'Estampado de alta resolución',
      'Tallas disponibles: S, M, L, XL, XXL',
      'Diseño único y exclusivo'
    ]
      },
  'Sudadera Attack on Titan': {
    imagen: 'img/sudadera5.jpg',
    descripcion: 'Sudadera con diseño atrevido y llamativo, perfecta para los fanáticos del anime.',
    caracteristicas: [
      'Material: 85% Algodón, 15% Poliéster',
      'Capucha con forro interior',
      'Bolsillo frontal amplio',
      'Estampado de alta resolución',
      'Tallas disponibles: S, M, L, XL, XXL',
      'Diseño único y exclusivo'
    ]
  },
  'Llavero Kuromi': {
    imagen: 'img/llavero1.jpg',
    descripcion: 'Llavero coleccionable de Kuromi. Ideal para llevar a tu ninja favorito contigo.',
    caracteristicas: [
      'Material: PVC de alta calidad',
      'Tamaño: 6cm x 4cm',
      'Resistente al agua',
      'Colores vibrantes',
      'Cadena metálica incluida'
    ]
  },
  'Llavero Pikachu': {
    imagen: 'img/llavero2.jpg',
    descripcion: 'Llavero coleccionable de Kuromi. Ideal para llevar a tu ninja favorito contigo.',
    caracteristicas: [
      'Material: PVC de alta calidad',
      'Tamaño: 6cm x 4cm',
      'Resistente al agua',
      'Colores vibrantes',
      'Cadena metálica incluida'
    ]
  },
  'Llavero Totoro': {
    imagen: 'img/llavero3.jpg',
    descripcion: 'Llavero coleccionable de Kuromi. Ideal para llevar a tu ninja favorito contigo.',
    caracteristicas: [
      'Material: PVC de alta calidad',
      'Tamaño: 6cm x 4cm',
      'Resistente al agua',
      'Colores vibrantes',
      'Cadena metálica incluida'
    ]
  },
  'Llavero Sailor Moon': {
    imagen: 'img/llavero4.jpg',
    descripcion: 'Llavero coleccionable de Kuromi. Ideal para llevar a tu ninja favorito contigo.',
    caracteristicas: [
      'Material: PVC de alta calidad',
      'Tamaño: 6cm x 4cm',
      'Resistente al agua',
      'Colores vibrantes',
      'Cadena metálica incluida'
    ]
  },
  'Figura Luffy': {
    imagen: 'img/figura1.jpg',
    descripcion: 'Figura de elfa en pose icónica. Perfecta para coleccionistas .',
    caracteristicas: [
      'Altura: 18cm',
      'Material: PVC y ABS',
      'Articulaciones móviles',
      'Base incluida',
      'Acabado premium con detalles pintados a mano'
    ]
  },
  'Mausepad': {
    imagen: 'img/mausepad.jpg',
    descripcion: 'Mousepad gaming con diseño anime. Superficie lisa para máxima precisión en tus juegos.',
    caracteristicas: [
      'Tamaño: 80cm x 30cm',
      'Grosor: 3mm',
      'Base antideslizante',
      'Superficie de tela suave',
      'Bordes cosidos para mayor durabilidad'
    ]
  },
  'Figura Bruja': {
    imagen: 'img/figura2.jpg',
    descripcion: 'Figura de Bruja Encantada con Sombrero y Escoba Mágica - Coleccionable de PVC, Perfecto para Decoración de Escritorio y Computadora, Colección Esencial para Fans de Anime en pose icónica. Perfecta para coleccionistas de One Piece.',
    caracteristicas: [
      'Altura: 18cm',
      'Material: PVC y ABS',
      'Articulaciones móviles',
      'Base incluida',
      'Acabado premium con detalles pintados a mano'
    ]
  },
  'Figura Hu Tao': {
    imagen: 'img/figura3.jpg',
    descripcion: 'Figura de Personaje de Anime - Hecha de material PVC, exquisitamente elaborada con diseños únicos. Ideal para vitrinas, regalos de cumpleaños, decoración de escritorio o adornos para el auto. Adecuada para todas las estaciones.',
    caracteristicas: [
      'Altura: 18cm',
      'Material: PVC y ABS',
      'Articulaciones móviles',
      'Base incluida',
      'Acabado premium con detalles pintados a mano'
    ]
  },
  
};

// Variables globales
let carrito = [];
let productos = [];
let busquedaActiva = false;

// ===== FUNCIONES DE CARRITO =====
function cambiarCantidad(boton, cambio) {
  const cantidadSpan = boton.parentElement.querySelector('span');
  let cantidad = parseInt(cantidadSpan.textContent);
  cantidad += cambio;
  
  if (cantidad < 1) cantidad = 1;
  if (cantidad > 99) cantidad = 99;
  
  cantidadSpan.textContent = cantidad;
}

function agregarAlCarrito(nombre, precio, boton, cantidadPersonalizada = null) {
  let cantidad;
  
  if (cantidadPersonalizada) {
    cantidad = cantidadPersonalizada;
  } else {
    const cantidadSpan = boton.parentElement.querySelector('.cantidad span');
    cantidad = parseInt(cantidadSpan.textContent);
  }
  
  const productoExistente = carrito.find(item => item.nombre === nombre);
  
  if (productoExistente) {
    productoExistente.cantidad += cantidad;
  } else {
    carrito.push({
      nombre: nombre,
      precio: precio,
      cantidad: cantidad
    });
  }
  
  boton.classList.add('clicked');
  setTimeout(() => boton.classList.remove('clicked'), 200);
  
  actualizarContadorCarrito();
  animarCarrito();
  
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarContadorCarrito() {
  const contador = document.getElementById('carrito-contador');
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
  
  if (totalItems > 0) {
    contador.textContent = totalItems;
    contador.classList.remove('oculto');
  } else {
    contador.classList.add('oculto');
  }
}

function animarCarrito() {
  const carritoFlotante = document.getElementById('carrito-flotante');
  if (carritoFlotante) {
    carritoFlotante.classList.add('carrito-animacion');
    setTimeout(() => carritoFlotante.classList.remove('carrito-animacion'), 500);
  }
}

function abrirCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  window.location.href = 'carrito.html';
}

// ===== FUNCIONES DE MODAL =====
function mostrarInfoProducto(nombreProducto, precio, elemento) {
  const modal = document.getElementById('modal-producto');
  const info = productosInfo[nombreProducto];
  
  if (!info) return;
  
  document.getElementById('modal-imagen').src = info.imagen;
  document.getElementById('modal-imagen').alt = nombreProducto;
  document.getElementById('modal-nombre').textContent = nombreProducto;
  document.getElementById('modal-precio').textContent = `$${precio.toLocaleString()}`;
  document.getElementById('modal-descripcion').textContent = info.descripcion;
  
  const listaCaracteristicas = document.getElementById('modal-lista-caracteristicas');
  listaCaracteristicas.innerHTML = '';
  info.caracteristicas.forEach(caracteristica => {
    const li = document.createElement('li');
    li.textContent = caracteristica;
    listaCaracteristicas.appendChild(li);
  });
  
  const cantidadSpan = modal.querySelector('.cantidad span');
  cantidadSpan.textContent = '1';
  
  const btnAgregar = document.getElementById('modal-agregar-carrito');
  btnAgregar.onclick = () => {
    const cantidad = parseInt(cantidadSpan.textContent);
    agregarAlCarrito(nombreProducto, precio, btnAgregar, cantidad);
    cerrarModal();
  };
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  const modal = document.getElementById('modal-producto');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// ===== FUNCIONES DE BÚSQUEDA =====
function inicializarBusqueda() {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const clearBtn = document.getElementById('clear-search');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    if (query.length > 0) {
      clearBtn.style.display = 'flex';
      mostrarSugerencias(query);
    } else {
      clearBtn.style.display = 'none';
      ocultarSugerencias();
      if (busquedaActiva) {
        limpiarBusqueda();
      }
    }
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      realizarBusqueda(searchInput.value.trim());
      ocultarSugerencias();
    }
  });

  searchBtn.addEventListener('click', () => {
    realizarBusqueda(searchInput.value.trim());
    ocultarSugerencias();
  });

  clearBtn.addEventListener('click', () => {
    limpiarBusqueda();
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      ocultarSugerencias();
    }
  });
}

function cargarProductos() {
  productos = [];
  const productosDOM = document.querySelectorAll('.producto');
  
  productosDOM.forEach((producto, index) => {
    const nombre = producto.querySelector('h3').textContent;
    const precio = producto.querySelector('p').textContent;
    const img = producto.querySelector('img').src;
    const categoria = producto.closest('.categoria').id;
    
    productos.push({
      id: index,
      nombre: nombre,
      precio: precio,
      img: img,
      categoria: categoria,
      elemento: producto
    });
  });
}

function buscarProductos(query) {
  const queryLower = query.toLowerCase();
  return productos.filter(producto => 
    producto.nombre.toLowerCase().includes(queryLower) ||
    producto.categoria.toLowerCase().includes(queryLower)
  );
}

function mostrarSugerencias(query) {
  const suggestions = document.getElementById('search-suggestions');
  if (!suggestions) return;
  
  const resultados = buscarProductos(query);
  
  if (resultados.length === 0) {
    suggestions.style.display = 'none';
    return;
  }

  suggestions.innerHTML = '';
  
  // Mostrar máximo 5 sugerencias
  resultados.slice(0, 5).forEach(producto => {
    const suggestionItem = document.createElement('div');
    suggestionItem.className = 'suggestion-item';
    suggestionItem.innerHTML = `
      <img src="${producto.img}" alt="${producto.nombre}" class="suggestion-img">
      <div class="suggestion-info">
        <div class="suggestion-name">${resaltarTexto(producto.nombre, query)}</div>
        <div class="suggestion-price">${producto.precio}</div>
      </div>
    `;
    
    suggestionItem.addEventListener('click', () => {
      realizarBusqueda(producto.nombre);
      ocultarSugerencias();
    });
    
    suggestions.appendChild(suggestionItem);
  });
  
  suggestions.style.display = 'block';
}

function ocultarSugerencias() {
  const suggestions = document.getElementById('search-suggestions');
  if (suggestions) {
    suggestions.style.display = 'none';
  }
}

function realizarBusqueda(query) {
  if (!query) return;
  
  const resultados = buscarProductos(query);
  const searchResults = document.getElementById('search-results');
  const resultsContainer = document.getElementById('results-container');
  const noResults = document.getElementById('no-results');
  const todasCategorias = document.querySelectorAll('.categoria:not(.search-results)');
  
  if (!searchResults || !resultsContainer || !noResults) return;
  
  todasCategorias.forEach(categoria => {
    categoria.style.display = 'none';
  });
  
  busquedaActiva = true;
  
  if (resultados.length === 0) {
    resultsContainer.innerHTML = '';
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    resultsContainer.innerHTML = '';
    
    resultados.forEach(producto => {
      const productoClone = producto.elemento.cloneNode(true);
      const h3 = productoClone.querySelector('h3');
      h3.innerHTML = resaltarTexto(h3.textContent, query);
      resultsContainer.appendChild(productoClone);
    });
  }
  
  searchResults.style.display = 'block';
  searchResults.scrollIntoView({ behavior: 'smooth' });
  
  document.getElementById('search-input').value = query;
  document.getElementById('clear-search').style.display = 'flex';
}


function limpiarBusqueda() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search');
  const searchResults = document.getElementById('search-results');
  const todasCategorias = document.querySelectorAll('.categoria:not(.search-results)');
  
  // Limpiar input y ocultar botón
  searchInput.value = '';
  clearBtn.style.display = 'none';
  
  // Ocultar resultados de búsqueda
  if (searchResults) {
    searchResults.style.display = 'none';
  }
  
  // Mostrar todas las categorías normales
  todasCategorias.forEach(categoria => {
    categoria.style.display = 'block';
  });
  
  // Ocultar sugerencias
  ocultarSugerencias();
  
  busquedaActiva = false;
}

function resaltarTexto(texto, query) {
  if (!query) return texto;
  
  const regex = new RegExp(`(${query})`, 'gi');
  return texto.replace(regex, '<mark>$1</mark>');
}

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  // Cargar carrito desde localStorage
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarContadorCarrito();
  }

  // Cargar productos para búsqueda
  cargarProductos();
  
  // Inicializar búsqueda
  inicializarBusqueda();

  // ANIMACIÓN: Fade-in escalonado de productos
  const productos = document.querySelectorAll('.producto');
  productos.forEach((producto, i) => {
    setTimeout(() => {
      producto.style.opacity = '1';
    }, i * 150); // Efecto cascada: 150ms entre cada producto
  });

  // ANIMACIÓN: Efecto pop al hacer clic en botones
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.remove('clicked');
      void btn.offsetWidth; // fuerza reinicio de la animación
      btn.classList.add('clicked');
    });
  });

  // Event listener para cerrar modal al hacer clic fuera
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal-producto');
    if (e.target === modal) {
      cerrarModal();
    }
  });

  // Event listener para cerrar modal con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cerrarModal();
    }
  });
});


// Efecto de hover mejorado para los enlaces sociales
function mejorarEfectosSociales() {
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(10px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0) scale(1)';
    });
  });
}

// Agregar a la inicialización
document.addEventListener("DOMContentLoaded", () => {
  // ... código existente ...
  inicializarAnimacionesFooter();
  mejorarEfectosSociales();
});


// Agregar esta función que falta (antes del último DOMContentLoaded)
function inicializarAnimacionesFooter() {
  const footerElements = document.querySelectorAll('.footer-brand, .footer-social, .footer-contact');
  
  // Configurar estado inicial
  footerElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.8s ease';
  });

  // Observer para animar cuando el footer sea visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footerElements.forEach((element, index) => {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, index * 200); // Animación escalonada
        });
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const footer = document.querySelector('footer');
  if (footer) {
    observer.observe(footer);
  }
}

// Efecto de hover mejorado para los enlaces sociales
function mejorarEfectosSociales() {
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(10px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0) scale(1)';
    });
  });
}


// ===== INICIALIZACIÓN UNIFICADA =====
document.addEventListener("DOMContentLoaded", () => {
  // Cargar carrito desde localStorage
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarContadorCarrito();
  }

  // Cargar productos para búsqueda
  cargarProductos();
  
  // Inicializar búsqueda
  inicializarBusqueda();

  // AGREGAR ESTA LÍNEA - Inicializar función "Ver más"
  inicializarVerMas();

  // Inicializar animaciones del footer
  inicializarAnimacionesFooter();
  
  // Mejorar efectos sociales
  mejorarEfectosSociales();

  // ANIMACIÓN: Fade-in escalonado de productos
  const productos = document.querySelectorAll('.producto');
  productos.forEach((producto, i) => {
    setTimeout(() => {
      producto.style.opacity = '1';
    }, i * 150); // Efecto cascada: 150ms entre cada producto
  });

  // ANIMACIÓN: Efecto pop al hacer clic en botones
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.remove('clicked');
      void btn.offsetWidth; // fuerza reinicio de la animación
      btn.classList.add('clicked');
    });
  });

  // Event listener para cerrar modal al hacer clic fuera
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal-producto');
    if (e.target === modal) {
      cerrarModal();
    }
  });

  // Event listener para cerrar modal con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cerrarModal();
    }
  });

  // Event listener para el logo
  const logo = document.getElementById('logo-kami');
  if (logo) {
    // Efecto adicional con teclado
    logo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        irAlInicio();
      }
    });
    
    // Hacer el logo accesible por teclado
    logo.setAttribute('tabindex', '0');
    logo.setAttribute('role', 'button');
    logo.setAttribute('aria-label', 'Ir al inicio de la página');
  }
});

// ===== FUNCIÓN PARA EL LOGO INTERACTIVO =====
function irAlInicio() {
  const logo = document.getElementById('logo-kami');
  
  // Agregar efecto de clic
  logo.classList.remove('clicked');
  void logo.offsetWidth; // Forzar reflow
  logo.classList.add('clicked');
  
  // Remover la clase después de la animación
  setTimeout(() => {
    logo.classList.remove('clicked');
  }, 600);
  
  // Limpiar búsqueda si está activa
  if (busquedaActiva) {
    limpiarBusqueda();
  }
  
  // Scroll suave al inicio
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Opcional: Agregar un pequeño efecto de vibración
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

// Agregar event listener adicional para el logo
document.addEventListener("DOMContentLoaded", () => {
  // ... código existente ...
  
  // Event listener para el logo
  const logo = document.getElementById('logo-kami');
  if (logo) {
    // Efecto adicional con teclado
    logo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        irAlInicio();
      }
    });
    
    // Hacer el logo accesible por teclado
    logo.setAttribute('tabindex', '0');
    logo.setAttribute('role', 'button');
    logo.setAttribute('aria-label', 'Ir al inicio de la página');
  }
});

// Función para mostrar/ocultar productos adicionales (CORREGIDA)
function toggleProductos(categoriaId) {
  const categoria = document.getElementById(categoriaId);
  const todosLosProductos = categoria.querySelectorAll('.producto');
  const boton = categoria.querySelector('.btn-ver-mas');
  const textoBoton = boton.querySelector('.texto-ver-mas');
  const iconoBoton = boton.querySelector('.icono-ver-mas');
  
  // Determinar cuáles son los productos que se pueden ocultar/mostrar
  // Asumiendo que los primeros 2-3 productos siempre están visibles
  const productosIniciales = 2; // Cambia este número según cuántos productos quieres mostrar inicialmente
  const productosToggleables = Array.from(todosLosProductos).slice(productosIniciales);
  
  if (productosToggleables.length === 0) return;
  
  const primerProductoToggleable = productosToggleables[0];
  const estaOculto = primerProductoToggleable.classList.contains('oculto');
  
  if (estaOculto) {
    // Mostrar productos ocultos
    productosToggleables.forEach((producto, index) => {
      setTimeout(() => {
        producto.classList.remove('oculto');
        producto.classList.add('mostrar');
      }, index * 100); // Animación escalonada
    });
    
    textoBoton.textContent = 'Ver menos';
    boton.classList.add('expandido');
    
    // Scroll suave hacia el primer producto mostrado
    setTimeout(() => {
      primerProductoToggleable.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 300);
    
  } else {
    // Ocultar productos
    productosToggleables.forEach((producto, index) => {
      setTimeout(() => {
        producto.classList.remove('mostrar');
        producto.classList.add('oculto');
      }, index * 50);
    });
    
    textoBoton.textContent = 'Ver más';
    boton.classList.remove('expandido');
    
    // Scroll hacia el título de la categoría
    setTimeout(() => {
      categoria.querySelector('h2').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 200);
  }
}

// Función para inicializar los botones "Ver más" (MEJORADA)
function inicializarVerMas() {
  const categorias = document.querySelectorAll('.categoria:not(.search-results)');
  
  categorias.forEach(categoria => {
    const todosLosProductos = categoria.querySelectorAll('.producto');
    const verMasContainer = categoria.querySelector('.ver-mas-container');
    
    // Si hay más de 2 productos, ocultar los adicionales
    if (todosLosProductos.length > 2) {
      // Mostrar solo los primeros 2 productos
      todosLosProductos.forEach((producto, index) => {
        if (index >= 2) {
          producto.classList.add('oculto');
        }
      });
      
      // Mostrar el botón "Ver más" si existe
      if (verMasContainer) {
        verMasContainer.style.display = 'block';
      }
    } else {
      // Si hay 2 o menos productos, ocultar el botón "Ver más"
      if (verMasContainer) {
        verMasContainer.style.display = 'none';
      }
    }
  });
}