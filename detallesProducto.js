document.addEventListener('DOMContentLoaded', function () {
    // Base de datos de productos
    const productos = {
        1: {
            nombre: 'Carro 6 x 2,5 metros',
            imagenes: [
                'carro6x2/1.jpeg',
                'carro6x2/2.jpeg',
                'carro6x2/3.jpeg',
                'carro6x2/4.jpeg'
            ],
            caracteristicas: {
                dimensiones: '6m largo x 2,5m ancho',
                peso: '2,5 toneladas',
                color: 'Disponible en cualquier color',
                materialExterior: 'Aluminio compuesto'
            },
            precios: {
                sinIVA: '$9.800.000',
                conIVA: '$11.858.000'
            }
        },
        2: {
            nombre: 'Carro 4 x 2 metros',
            imagenes: [
                'carro4x2/1.jpg',
                'carro4x2/2.jpg',
                'carro4x2/3.jpg',
                'carro4x2/4.jpg'
            ],
            caracteristicas: {
                dimensiones: '4m largo x 2m ancho',
                peso: '2 toneladas',
                color: 'Disponible en cualquier color',
                materialExterior: 'Aluminio compuesto'
            },
            precios: {
                sinIVA: '$7.800.000',
                conIVA: '$9.438.000'
            }
        },
        3: {
            nombre: 'Carro 3 x 2 metros',
            imagenes: [
                'carro3x2/1.jpeg',
                'carro3x2/2.jpeg',
                'carro3x2/3.jpeg',
                'carro3x2/4.jpeg'
            ],
            caracteristicas: {
                dimensiones: '3m largo x 2m ancho',
                peso: '1,5 toneladas',
                color: 'Disponible en cualquier color',
                materialExterior: 'Aluminio compuesto'
            },
            precios: {
                sinIVA: '$6.800.000',
                conIVA: '$8.228.000'
            }
        }
    };

    // Obtener el ID del producto de la URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    // Función para cargar los detalles del producto
    function cargarDetallesProducto(id) {
        const producto = productos[id];
        if (!producto) {
            console.error('Producto no encontrado');
            return;
        }

        console.log('Cargando producto:', producto);

        // Actualizar título
        document.querySelector('.Nombre-producto').textContent = producto.nombre;
        document.title = `Foodtruck Chillan - ${producto.nombre}`;

        // Actualizar imágenes del carrusel con logging
        const imagenes = document.querySelectorAll('.card img');
        console.log('Número de elementos de imagen encontrados:', imagenes.length);

        producto.imagenes.forEach((src, index) => {
            if (imagenes[index]) {
                console.log(`Actualizando imagen ${index + 1} con src:`, src);
                imagenes[index].src = src;
                imagenes[index].alt = `${producto.nombre} - Imagen ${index + 1}`;
            }
        });

        // Actualizar características
        document.getElementById('Dimensiones').textContent = producto.caracteristicas.dimensiones;
        document.getElementById('Peso').textContent = producto.caracteristicas.peso;
        document.getElementById('Color').textContent = producto.caracteristicas.color;
        document.getElementById('Material-exterior').textContent = producto.caracteristicas.materialExterior;

        // Actualizar precios
        const precios = document.querySelectorAll('.precio');
        precios[0].textContent = producto.precios.sinIVA;
        precios[1].textContent = producto.precios.conIVA;
    }

    // Si hay un ID de producto, cargar sus detalles
    if (productId) {
        cargarDetallesProducto(productId);
    }

    // Resto del código existente para el formulario de cotización...
    const metodoEntregaCotizacion = document.getElementById('metodo-entrega-cotizacion');
    const infoEnvioCotizacion = document.getElementById('info-envio-cotizacion');
    const formularioCotizacion = document.getElementById('formulario-cotizacion');
    const contactoCotizacion = document.getElementById('cotizacion');
    const overlayCotizacion = document.getElementById('overlay-cotizacion');
    const btnCotizar = document.getElementById('btn-cotizar');
    const cerrarCotizacion = document.getElementById('cerrar-cotizacion');

    // Evento para mostrar/ocultar información de envío
    metodoEntregaCotizacion.addEventListener('change', function () {
        if (metodoEntregaCotizacion.value === 'envio') {
            infoEnvioCotizacion.classList.remove('oculto'); // Muestra la información de envío
            document.getElementById('direccion-envio-cotizacion').required = true;
            document.getElementById('ciudad-cotizacion').required = true;
        } else {
            infoEnvioCotizacion.classList.add('oculto'); // Oculta la información de envío
            document.getElementById('direccion-envio-cotizacion').required = false;
            document.getElementById('ciudad-cotizacion').required = false;
        }
    });

    // Verificar que los elementos existan
    if (!formularioCotizacion || !contactoCotizacion || !overlayCotizacion || !btnCotizar || !cerrarCotizacion) {
        console.error('Elementos no encontrados. Verifica los IDs en el HTML.');
        return;
    }

    // Agregar eventos de clic
    btnCotizar.addEventListener('click', toggleFormularioCotizacion);
    cerrarCotizacion.addEventListener('click', toggleFormularioCotizacion);
    overlayCotizacion.addEventListener('click', (e) => {
        if (e.target === overlayCotizacion) {
            toggleFormularioCotizacion();
        }
    });

    // Función para alternar la visibilidad del formulario
    function toggleFormularioCotizacion() {
        const isVisible = contactoCotizacion.style.display === 'block';
        contactoCotizacion.style.display = isVisible ? 'none' : 'block';
        overlayCotizacion.style.display = isVisible ? 'none' : 'block';
    }

    function mostrarDetalles(producto) {
        document.querySelector('.Nombre-producto').textContent = producto.nombreProducto;
        document.querySelector('#Dimensiones').textContent = producto.caracteristicas.Dimensiones;
        document.querySelector('#Peso').textContent = producto.caracteristicas.Peso;
        document.querySelector('#Color').textContent = producto.caracteristicas.Color;
        document.querySelector('#Material-exterior').textContent = producto.caracteristicas.MaterialExterior;
        document.querySelector('.precio').textContent = producto.precios.conIVA;
    }
});
