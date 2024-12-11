document.addEventListener('DOMContentLoaded', function () {
    const formularioContacto = document.getElementById('formulario-contacto');
    const contacto = document.getElementById('contacto');
    const overlay = document.getElementById('overlay');
    const btnContacto = document.getElementById('btn-contacto');
    const cerrarContacto = document.getElementById('cerrar-contacto');

    // Validar que todos los elementos existan
    if (!formularioContacto || !contacto || !overlay || !btnContacto || !cerrarContacto) {
        console.error('Elementos no encontrados. Verifica los IDs en el HTML.');
        return;
    }

    // Agregar eventos de clic
    btnContacto.addEventListener('click', toggleFormularioContacto);
    cerrarContacto.addEventListener('click', toggleFormularioContacto);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            toggleFormularioContacto();
        }
    });

    function toggleFormularioContacto() {
        const isVisible = contacto.style.display === 'block';
        // Alternar visibilidad con `display`
        contacto.style.display = isVisible ? 'none' : 'block';
        overlay.style.display = isVisible ? 'none' : 'block';
    }



});

