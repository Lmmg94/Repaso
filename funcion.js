document.addEventListener('DOMContentLoaded', function() {
    const txtnombre = document.getElementById("nombre");
    const txtcontrasena = document.getElementById("contrasena");
    const errorDiv = document.getElementById("error");

    function ingresar() {
        // CORREGIDO: Obtener VALORES reales con .value.trim()
        const nombre = txtnombre.value.trim();
        const contra = txtcontrasena.value.trim();

        // Ocultar error previo
        if (errorDiv) {
            errorDiv.style.display = 'none';
        }

        // Verificar (ahora funciona porque usa valores)
        if (nombre === "Luisa M." && contra === "Lmmg2009") {
            window.location.href = "bienvenida.html"; // Redirige si correcto
        } else {
            // Mostrar error
            if (errorDiv) {
                errorDiv.style.display = 'block';
                // Auto-ocultar y limpiar después de 3s
                setTimeout(function() {
                    errorDiv.style.display = 'none';
                    if (txtnombre) txtnombre.value = '';
                    if (txtcontrasena) txtcontrasena.value = '';
                }, 3000);
            }
        }
    }

    window.ingresar = ingresar; // Global para onclick
});
