document.addEventListener("DOMContentLoaded", () => {
    const botonMostrar = document.getElementById("mostrarFormulario");
    const formulario = document.getElementById("formularioSuscripcion");
    const tituloFormulario = document.getElementById("tituloFormulario");

    botonMostrar.addEventListener("click", () => {
        formulario.classList.toggle("oculto");
    });

    const campos = [
        "nombre", "email", "password", "repetir",
        "edad", "telefono", "direccion", "ciudad", "cp", "dni"
    ];

    campos.forEach(id => {
        const input = document.getElementById(id);
        const error = document.getElementById(`error-${id}`);

        input.addEventListener("blur", () => {
            if (!input.value.trim()) {
                error.textContent = "Este campo es obligatorio.";
            } else {
                error.textContent = "";
            }
        });

        input.addEventListener("focus", () => {
            error.textContent = "";
        });

        if (id === "nombre") {
            input.addEventListener("keydown", () => {
                const valor = input.value.trim();
                if (valor) {
                    tituloFormulario.textContent = `Bienvenido/a ${valor}`;
                } else {
                    tituloFormulario.textContent = "HOLA";
                }
            });
        }
    });

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let valido = true;

        campos.forEach(id => {
            const input = document.getElementById(id);
            const error = document.getElementById(`error-${id}`);

            if (!input.value.trim()) {
                error.textContent = "Este campo es obligatorio.";
                valido = false;
            }
        });

        const pass = document.getElementById("password").value.trim();
        const repetir = document.getElementById("repetir").value.trim();

        if (pass && repetir && pass !== repetir) {
            document.getElementById("error-repetir").textContent = "Las contraseñas no coinciden.";
            valido = false;
        }

        if (valido) {
            const datos = campos.map(id => {
                const input = document.getElementById(id);
                return `${id.charAt(0).toUpperCase() + id.slice(1)}: ${input.value.trim()}`;
            }).join("\n");

            alert("Formulario enviado correctamente:\n\n" + datos);
            formulario.reset();
            tituloFormulario.textContent = "HOLA";
        }
    });
});
